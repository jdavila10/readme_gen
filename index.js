const inquirer = require('inquirer')
const fs = require('fs')
inquirer.prompt([
	{
		name: 'title',
		message: 'What is the title of your project?',
		type: 'input'
	},
	{
		name: 'licence',
		message: 'What is licence?',
		type: 'input'
	},
	{
		name: 'description',
		message: 'What is the description of your project?',
		type: 'input'
    },
    
]).then((answers) => {
	let val = '';
	for (const key in answers) {
		console.log();
		if(answers[key]){
			if (key == 'title'){
				val += '##' + answers[key] + '\n'
			} else if (key == 'licence'){
				val += '##' + answers[key] + '\n'
            }else if (key == 'licence'){
				val += '##' + answers[key] + '\n'
			}else {
				val += answers[key] + '\n'
			}
		}
	}
	fs.writeFile('README.md', val, (error) => {
		if(error){
			console.log(error);
		}
		else{
			console.log('success');
		}
	})
})
