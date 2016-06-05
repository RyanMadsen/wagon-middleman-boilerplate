# Require core library
require 'middleman-core'

# Extension namespace
class ::Middleman::Wagon < ::Middleman::Extension

  def initialize(app, options_hash={}, &block)
    super

  end

  def after_configuration
  end

  def after_build

    path = "#{Dir.pwd}/build"
    destination = "#{File.expand_path("#{Dir.pwd}/../app/views/pages")}"
    js = "#{path}/assets/javascripts/application.js"
    compatibility_js = "#{path}/assets/javascripts/compatibility.js"
    css = "#{path}/assets/stylesheets/all.css"



    # Dir.glob("#{path}/*.html").each do |file|
    #   file_name = File.basename file
    #   dest = "#{destination}/#{file_name}".gsub('.html', '.liquid')
    #
    #
    #   File.open file do |file|
    #     content = file.read
    #     scripts = []
    #     links = []
    #     stylesheets = []
    #     images = []
    #     document = Nokogiri::HTML content
    #     document.css('a').each do |a|
    #       if a['href'].present? && a['href'].start_with?('/')
    #         links.push a.to_s
    #       end
    #     end
    #     document.css('script').each do |script_tag|
    #       if script_tag['src'].present? && script_tag['src'].include?('assets/javascripts')
    #         scripts.push script_tag.to_s
    #       end
    #     end
    #
    #     document.css('link').each do |link_tag|
    #       if link_tag['href'].present? && link_tag['href'].include?('assets/stylesheets')
    #         stylesheets.push link_tag.to_s
    #       end
    #     end
    #
    #     document.css('img').each do |img_tag|
    #       if img_tag['src'].present? && img_tag['src'].include?('assets/images')
    #         images.push img_tag.to_s
    #       end
    #     end
    #
    #
    #     scripts.each do |script|
    #       tmp = Nokogiri::HTML script
    #       source = tmp.css('script').first['src']
    #       if script.include?('defer') && !script.include?('defer="defer"')
    #         script = script.gsub('defer', 'defer="defer"')
    #       end
    #       content = content.gsub script, "{{ '#{source.gsub('assets/javascripts/', '')}' | javascript_tag }}"
    #     end
    #
    #     stylesheets.each do |link|
    #       link = link.gsub('>', " />")
    #       tmp = Nokogiri::HTML link
    #       href = tmp.css('link').first['href']
    #       content = content.gsub link, "{{ '#{href.gsub('assets/stylesheets/', '')}' | stylesheet_tag }}"
    #     end
    #
    #     images.each do |image|
    #       image = image.gsub('>', " />")
    #       tmp = Nokogiri::HTML image
    #       tmp_src = tmp.css('img').first['src']
    #       src = tmp_src.gsub('assets/images/', '')
    #       tmp_image = image.gsub(tmp_src, "{{ '#{src}' | theme_image_url }}")
    #       content = content.gsub image, tmp_image
    #     end
    #
    #     # links.each do |link|
    #     #   tmp = Nokogiri::HTML link
    #     #   tmp_href = tmp.css('a').first['href']
    #     #   href = tmp_href.sub('/', '').gsub('.html', '')
    #     #   href = 'index' if href.blank?
    #     #   tmp_link = link.sub(tmp_href, "{% path_to #{href} %}")
    #     #   puts "Replacing |#{link}| with |#{tmp_link}|"
    #     #
    #     #   content = content.gsub(link, tmp_link)
    #     # end
    #
    #     File.open dest, 'w' do |f|
    #       f.write content
    #     end
    #     # images.map{|i| puts i}
    #   end
    #
    #   # FileUtils.cp(file, dest)
    # end


    destination = "#{File.expand_path("#{Dir.pwd}/../public")}"
    Dir.glob("#{path}/assets/fonts/*").each do |file|
      relative_path = file.gsub("#{path}/assets/fonts/", "")
      dest = "#{destination}/fonts/#{relative_path}"
      FileUtils.mkdir_p File.dirname(dest)
      FileUtils.cp(file, dest)
    end

    Dir.glob("#{path}/assets/images/**/*.{jpg,jpeg,png,svg,gif}").each do |file|
      relative_path = file.gsub("#{path}/assets/images/", "")
      dest = "#{destination}/images/#{relative_path}"
      FileUtils.mkdir_p File.dirname(dest)
      FileUtils.cp(file, dest)
    end

    js_destination = "#{destination}/javascripts"

    Dir.glob("#{path}/assets/javascripts/{compatibility,application}.js").each do |file|
      relative_path = file.gsub("#{path}/assets/javascripts/", "")
      dest = "#{js_destination}/#{relative_path}"
      FileUtils.mkdir_p File.dirname(dest)
      FileUtils.cp(file, dest)
    end

    css_destination = "#{destination}/stylesheets"
    Dir.glob("#{path}/assets/stylesheets/all.css").each do |file|
      relative_path = file.gsub("#{path}/assets/stylesheets/", "")
      dest = "#{css_destination}/#{relative_path}"
      FileUtils.mkdir_p File.dirname(dest)
      FileUtils.cp(file, dest)
    end
  end
end

::Middleman::Wagon.register(:wagon)
