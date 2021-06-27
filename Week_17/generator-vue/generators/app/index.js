const _extend = require("lodash/extend");
var Generator = require('yeoman-generator');
_extend(Generator.prototype, require("yeoman-generator/lib/actions/install"));
module.exports = class extends Generator {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
  }

  async initPke() {
    let prompts = [
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      }
    ]
    this.answers = await this.prompt(prompts);
    let pkejson = {
      "name": this.answers.name,
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
      },
      "dependencies": {
      }
    };
    this.env.options.nodePackageManager = 'npm';
    this.fs.extendJSON(this.destinationPath('package.json'), pkejson);
    this.npmInstall(['vue'], {'save-dev': false});
    this.npmInstall([
      'vue-loader',
      'webpack',
      'vue-template-compiler',
      'css-loader',
      'vue-style-loader',
      'copy-webpack-plugin'
    ], {'save-dev': true});
  }

  copyFiles  () {
    this.fs.copyTpl(
      this.templatePath('HelloWord.vue'),
      this.destinationPath('src/HelloWord.vue')
    )
    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js')
    )
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html'),
      {title: this.answers.name}
    )
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    )
  }
}