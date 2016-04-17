require 'middleman-core/cli'


module Middleman
  module Cli

    class Wagon < Thor::Group
      include Thor::Actions


      check_unkonwn_options!
      namespace :wagon

      desc "wagon [options]", "Copy files to wagon"
      method_option 'html', type: :boolean, aliases: '-html', desc: "Include html file in copy. Will destroy existing liquid templates!"
      def wagon
        @shared_instance = ::Middleman::Application.server.inst

        puts "Running the copy?"
        puts "Current Directory: #{Dir.pwd}"
      end
    end


    Base.register(Middleman::Cli::Wagon, 'wagon' , 'wagon [options]', '')
  end
end
