# InquirerJS
***InquirerJS*** is an easily embeddable and beautiful command line interface for NodeJS projects. I found this library while I was working with JHipster-PrimeNG module. JHipster provides various modules to generate the modern web applications with the help of Yeoman generator. Internally Yeoman generator uses this library for an interactive question and answer prompts through CLI. But we can use this library in a standalone environment as well. Even though there are full blown command-line utilities such as Commander, Vorpal and args available in the market, the usage and benefits of InquirerJS is quite impressive.

The major tasks of this library includes:

* Asking questions
* Parsing input
* Validating answers
* Providing error feedback
* Managing hierarchical prompts


# Installation: #

The installation and setup process is very easy with few lines of code, at first it can be installed locally as below,
```
npm install inquirer --save-dev
```
Now we can use the inquirer library in two different approaches.

Prepare the questions array object  which will be passed to a prompt method and then resolve the answers returned by a promise.
```
var inquirer = require('inquirer');
inquirer.prompt([/* Pass your questions in here */]).then(function (answers) {
	// Use user feedback for... whatever!!
});
```
2. You can also pass Rx.observable instance using reactive interface as below

```
var prompts = new Rx.Subject();
inquirer.prompt(prompts);

// At some point in the future, push new questions
prompts.onNext({ /* question... */ });
prompts.onNext({ /* question... */ });

// When you're done
prompts.onCompleted();
```
The question object has the below properties(as per official documentation),

* type: (String) Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
* name: (String) The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
* message: (String|Function) The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
* default: (String|Number|Array|Function) Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
* choices: (Array|Function) Choices array or a function returning a choices array. If defined as a function, the first parameter will be the current inquirer session answers. Array values can be simple strings, or objectscontaining a name (to display in list), a value (to save in the answers hash) and a short (to display after selection) properties. The choices array can also contain a Separator.
* validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
* filter: (Function) Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the Answers hash.
* when: (Function, Boolean) Receive the current user answers hash and should return true or false depending on whether or not this question should be asked. The value can also be a simple boolean.
* pageSize: (Number) Change the number of lines that will be rendered when using list, rawList, expand or checkbox.
* prefix: (String) Change the default prefix message.
* suffix: (String) Change the default suffix message.
The different types of prompts is achieved with the help of type attribute.

# Prompt Types #

The possible values are ** input, confirm, list, rawlist, expand, checkbox, password and  editor **. The default type is input.

### Input:  
This prompt type is used to take the input from user as set of characters. It includes **type, name, message[, default, filter, validate]** properties.
```
{
    type: 'input',
    name: 'language',
    message: 'What\'s your mother tongue',
    default: function () {
        return 'English';
    }
}
```
<img src="images/input.png" height="200">

### Confirm: 

This prompt is used to determine or confirm the question. It accepts **type, name, message[, default]** properties.
```
{
    type: 'confirm',
    name: 'toBeLiked',
    message: 'Do you like InquirerJS?',
    default: true
}
```
<img src="images/confirm.png" height="200">

### List:
The prompt is used to select one item among multiple choices. It accepts **type, name, message, choices[, default, filter]** properties.
```
{
    type: 'list',
    name: 'product',
    message: 'Which Apple product you like more?',
    choices: ['iPhone8', 'AppleWatch', 'MacBookPro', 'iPhoneX', 'iPad', 'iPhone7'],
    filter: function (val) {
        return val.toLowerCase();
    }
}
```
<img src="images/list.png" height="200">

### RawList:
This prompt type is similar to previous list type but the selection is controlled through indexes or numbers. It accepts **type, name, message, choices[, default, filter]** properties. The default selection should be an index value.
```
{
    type: 'rawlist',
    name: 'product',
    message: 'Which Apple product you like more?',
    choices: ['iPhone8', 'AppleWatch', 'MacBookPro', 'iPhoneX', 'iPad', 'iPhone7'],
    filter: function (val) {
        return val.toLowerCase();
    }
}
```
<img src="images/rawlist.png" height="200">

### Expand:
This prompt list is similar to rawlist but you need to define single character keys for the choices. If the default key is not provided then help option(h) added by prompt selected as default option.
```
choices: [
    {
        key: 'y',
        name: 'Overwrite',
        value: 'overwrite'
    },
    {
        key: 'a',
        name: 'Overwrite this one and all next',
        value: 'overwrite_all'
    },
    {
        key: 'd',
        name: 'Show diff',
        value: 'diff'
    },
    {
        key: 'x',
        name: 'Abort',
        value: 'abort'
    }
]
```
<img src="images/expand.png" height="100">

### Checkbox:
This prompt also displays list options but in the form of checkboxes and it allows selection for multiple items. You can make default selection as checked by {checked: true}. It accepts **type, name, message, choices[, filter, validate, default]** properties.
```
{
    type: 'checkbox',
    message: 'Select toppings',
    name: 'toppings',
    choices: [
        new inquirer.Separator(' = The Meats = '),
        {
            name: 'Pepperoni'
        },
        {
            name: 'Ham'
        },
        {
            name: 'Ground Meat'
        },
        {
            name: 'Bacon'
        },
        new inquirer.Separator(' = The Cheeses = '),
        {
            name: 'Mozzarella',
            checked: true
        },
        {
            name: 'Cheddar'
        },
        {
            name: 'Parmesan'
        },
        new inquirer.Separator(' = The usual ='),
        {
            name: 'Mushroom'
        },
        {
            name: 'Tomato'
        },
        new inquirer.Separator(' = The extras = '),
        {
            name: 'Pineapple'
        },
        {
            name: 'Olives',
            disabled: 'out of stock'
        },
        {
            name: 'Extra cheese'
        }
    ],
```
<img src="images/checkbox.png" height="200">

### Password: 
The password input is provided as hidden text or masked characters(using mask property). It accepts **type, name, message[, default, filter, validate]** properties.
```[
    {
        type: 'password',
        message: 'Enter a password',
        name: 'password1',
        validate: requireLetterAndNumber
    },
    {
        type: 'password',
        message: 'Enter a masked password',
        name: 'password2',
        mask: '*',
        validate: requireLetterAndNumber
    }
]
```
<img src="images/password.png" height="100">

### Editor:

This prompt allows the instace of user preferred editor on a temporary file. The editor to be used is selected by reading the $VISUAL or $EDITOR environment variables. If neither of those are present, notepad (on Windows) or vim (Linux or Mac) is used.It accepts **type, name, message[, default, filter, validate]** properties.

```{
    type: 'editor',
    name: 'biography',
    message: 'Please write a short biography of at least 3 lines.',
    validate: function (text) {
        if (text.split('\n').length < 3) {
            return 'Must be at least 3 lines.';
        }

        return true;
    }
}
```
<img src="images/editor.png" height="200">

## User interfaces using bottom bar:
This UI present a fixed text at the bottom of a free text zone while outputting command outputs. For example, the loading message displayed as below.

```var loader = [
  '/ Installing',
  '| Installing',
  '\\ Installing',
  '- Installing'
];
var i = 4;
var ui = new BottomBar({bottomBar: loader[i % 4]});
```

<img src="images/bottom-bar.png" height="100">

You can make above prompts more interesting by adding the options such as **pagination(pagination, pageSize), hierarchical, nested, separator and recursive prompts**. Also the prompts displayed conditionally using When property. Please look at the examples for more details.

# Reactive Interface: #

This library uses JS Reactive Extension to handle events and async flows in order to ask questions dynamically. In this case we need to pass reactive subject as instance instead of passing normal questions array object.

```
var prompts = new Rx.Subject();
inquirer.prompt(prompts);

// At some point in the future, push new questions
prompts.onNext({ /* question... */ });
prompts.onNext({ /* question... */ });

// When you're done
prompts.onCompleted();
```

## My feature requests:

The parent and child hierarchal prompts displayed at the same time for a selection criteria gives easy to select more options in a single attempt. The design would be like this(the number of child items can be selected while selecting parent item ).
```
Option1

         Option1.1

         Option 1.2

         Option1.3

Option2

        Option2.1

        Option2.2

--------
```
# Summary:

The InquirerJS library provides an easy to use command line interface for prompting the questions and then followed by answers. Even though there are full blown CLI tools available, this library is easy to use with full featured set of commands. Hope this library is further improved and helpful to the community as favorite CLI tool.

