# Require core library
require 'middleman-core'

# Extension namespace
class ::Middleman::Wagon < ::Middleman::Extension

  def initialize(app, options_hash={}, &block)
    super

  end

  def after_configuration
  end

  # def after_build
  #   path = "#{Dir.pwd}/build"
  #   destination = "#{File.expand_path("#{Dir.pwd}/../app/views/pages")}"
  #   js = "#{path}/assets/javascripts/application.js"
  #   compatibility_js = "#{path}/assets/javascripts/compatibility.js"
  #   css = "#{path}/assets/stylesheets/all.css"
  #
  #
  #
  #   Dir.glob("#{path}/*.html").each do |file|
  #     file_name = File.basename file
  #     dest = "#{destination}/#{file_name}".gsub('.html', '.liquid')
  #
  #     FileUtils.cp(file, dest)
  #   end
  #
  #
  #   destination = "#{File.expand_path("#{Dir.pwd}/../public")}"
  #   Dir.glob("#{path}/assets/fonts/*").each do |file|
  #     relative_path = file.gsub("#{path}/assets/fonts/", "")
  #     dest = "#{destination}/fonts/#{relative_path}"
  #     FileUtils.mkdir_p File.dirname(dest)
  #     FileUtils.cp(file, dest)
  #   end
  #
  #   Dir.glob("#{path}/assets/images/*").each do |file|
  #     relative_path = file.gsub("#{path}/assets/images/", "")
  #     dest = "#{destination}/#{relative_path}"
  #     FileUtils.mkdir_p File.dirname(dest)
  #     FileUtils.cp(file, dest)
  #   end
  #
  #   js_destination = "#{destination}/javascripts"
  #   Dir.glob("#{path}/assets/javascripts/**/*.js").each do |file|
  #     relative_path = file.gsub("#{path}/assets/javascripts/", "")
  #     dest = "#{js_destination}/#{relative_path}"
  #     FileUtils.mkdir_p File.dirname(dest)
  #     FileUtils.cp(file, dest)
  #   end
  #
  #   css_destination = "#{destination}/stylesheets"
  #   Dir.glob("#{path}/assets/stylesheets/**/*.css").each do |file|
  #     relative_path = file.gsub("#{path}/assets/stylesheets/", "")
  #     dest = "#{css_destination}/#{relative_path}"
  #     FileUtils.mkdir_p File.dirname(dest)
  #     FileUtils.cp(file, dest)
  #   end
  # end
end

::Middleman::Wagon.register(:wagon)
