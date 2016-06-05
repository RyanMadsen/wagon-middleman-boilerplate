# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)

Gem::Specification.new do |s|
  s.name        = "middleman-wagon"
  s.version     = "1.0.0"
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Joshua Tyree"]
  s.email       = ["joshuat@createthebridge.com"]
  s.homepage    = "http://createthebridge.com"
  s.summary     = %q{Used to copy files after build to match the wagon directories}
  s.description = %q{Used to copy files after build to match the wagon directories}

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]

  # The version of middleman-core your extension depends on
  s.add_runtime_dependency("middleman-core", [">= 3.4.0"])
  s.add_runtime_dependency("nokogiri", [">=1.6.7.2"])

  # Additional dependencies
  # s.add_runtime_dependency("gem-name", "gem-version")
end
