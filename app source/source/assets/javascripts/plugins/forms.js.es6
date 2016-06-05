//= require plugins/notify
//= require plugins/input-mask

class EmailForm {
  constructor(selector, subject = 'Contact form submission') {
    this.element = $(selector);

    // Sanity check for multiple elements found
    if (this.element.length > 1) {
      console.error('Cannot initialize email form with selector "%s" because there are multiple elements associated with it.', selector);
      return;
    }

    // Sanity check for no elements found
    if (this.element.length < 1) {
      console.error('Cannot initialize email form with selector "%s" because there are no elements matching the selector.', selector);
      return;
    }

    // Find the response template
    this.template = this.element.find('.response-template').html();

    // Proto the payload
    this.payload = {
      key: '7Tvkfgxy5AWo6KXowxojOQ',
      message: {
        from_email: 'collisioncenter@do-not-reply.com',
        from_name: 'Do Not Reply',
        subject: subject,
        html: this.template,
        to: [
          {
            email: this.element.attr('data-send-to'),
            type: 'to'
          }
        ]
      }
    };

    this.variables = {};
    this.element.find('input[data-merge-var],select[data-merge-var],textarea[data-merge-var]').each((index, item) => {
      // Bind change for validation checking
      $(item).bind('keyup blur change', this.valueDidChange.bind(this));
      let name = $(item).attr('data-merge-var');
      let required = $(item).attr('data-required') !== undefined;
      let value = $(item).val();
      this.variables[name] = {
        value: value,
        valid: (required) ? (value !== undefined && value !== null && value !== '') : true
      }
    });

    // Bind submit of form
    this.element.find('input[type=submit]').on('click', this.willSubmit.bind(this));
  }

  valueDidChange(event) {
    let el = $(event.currentTarget);
    let item = el.attr('data-merge-var');
    let required = el.attr('data-required') !== undefined;
    let value = el.val();

    this.variables[item] = {
      value: value,
      valid: (required) ? (value !== undefined && value !== null && value !== '') : true
    };

    el.closest('.input-hoshi').toggleClass('invalid', !this.variables[item].valid);

    this.updateMessage();
  }

  willSubmit(event) {
    event.preventDefault(); // Prevent default form submit

    if (this.canSubmit()) {

      $.ajax({
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        type: 'POST',
        data: this.payload,
        beforeSend: () => {
          this.element.find('input[type=submit]').prop('disabled', true);
          this.element.find('input[type=submit]')[0].disabled = true;
        },
        error: (e1, e2) => {
          this.element.find('input[type=submit]').notify('Uh oh, please try again later.', {
            elementPosition: 'bottom right'
          });
        },
        success: result => {
          this.element.find('input[type=submit]').notify('Thank you for your submission.', 'success', {
            elementPosition: 'bottom right'
          });
        },
        complete: () => {
          this.element.find('input[type=submit]').prop('disabled', false);
          this.element.find('input[type=submit]')[0].disabled = false;
        }
      })

    }
  }

  canSubmit() {
    let valid = true;
    for (var k in this.variables) {
      if (!this.variables[k].valid) {
        valid = false;
        break;
      }
    }
    return valid;
  }

  updateMessage() {
    let msg = this.template;
    for(var key in this.variables) {
      let exp = new RegExp(`{{${key}}}`, "g");
      msg = msg.replace(exp, this.variables[key].value);
    }
    this.payload.message.html = msg;
    console.log(msg);
  }
}


$(document).ready(() => {

  new EmailForm('form#contact-form')

});
