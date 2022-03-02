"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import readline module for getting input from the console
const readLine = __importStar(require("readline"));
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const menuQ = () => {
    return new Promise((resolve, reject) => {
        try {
            rl.question('your choice: ', (answer) => {
                resolve(answer);
            });
        }
        catch (error) {
            reject();
        }
    });
};
const milkQ = () => {
    return new Promise((resolve, reject) => {
        try {
            rl.question('How many cups of milk to add? ', (answer) => {
                resolve(answer);
            });
        }
        catch (error) {
            reject();
        }
    });
};
const espressoQ = () => {
    return new Promise((resolve, reject) => {
        try {
            rl.question('How many shots of espresso to add? ', (answer) => {
                resolve(answer);
            });
        }
        catch (error) {
            reject();
        }
    });
};
const peppermintQ = () => {
    return new Promise((resolve, reject) => {
        try {
            rl.question('How many shots of peppermint to add? ', (answer) => {
                resolve(answer);
            });
        }
        catch (error) {
            reject();
        }
    });
};
// create parent class mocha
class Mocha {
    constructor() {
        this.milk = 1;
        this.shot = 1;
        this.chocolateType = 'dark';
    }
    // list the ingredients of mocha
    prepare() {
        console.log('Your', this.chocolateType, 'Chocolate Mocha Ingredients:');
        console.log(this.chocolateType, ' chocolate');
        console.log('Cups of milk: ', this.milk);
        console.log('Cups of espresso: ', this.shot, '\n\n');
    }
}
// inherits from Mocha
class WhiteChocolateMocha extends Mocha {
    constructor() {
        super(...arguments);
        this.chocolateType = 'White';
    }
}
// inherits from Mocha
class DarkChocolateMocha extends Mocha {
    constructor() {
        super(...arguments);
        this.chocolateType = 'Dark';
    }
}
// inherits from Mocha
class PeppermintMocha extends Mocha {
    constructor() {
        // include super to pull in parent constructor
        super();
        this.peppermintSyrup = 1;
    }
    // Overrides Mocha prepare with additional statements
    prepare() {
        console.log('Your Peppermint Mocha Ingredients:');
        console.log('Dark chocolate');
        console.log('Cups of milk: ', this.milk);
        console.log('Cups of espresso: ', this.shot);
        console.log('Pumps of peppermint: ', this.peppermintSyrup, '\n\n');
    }
}
// display menu and return selected menu item
const showMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Select Mocha from menu: \n', '1: Create White Chocolate Mocha \n', '2: Create Dark Chocolate Mocha \n', '3: Create Peppermint Mocha\n', '0: Exit\n');
    const qMenu = yield menuQ();
    return qMenu;
});
// User questions
const userOptions = (mochaObject) => __awaiter(void 0, void 0, void 0, function* () {
    const milkPicked = yield milkQ();
    const milkChoice = parseInt(milkPicked);
    const espPicked = yield espressoQ();
    const espChoice = parseInt(espPicked);
    // If peppermint mocha
    if (mochaObject instanceof PeppermintMocha) {
        const pepPicked = (yield peppermintQ());
        const pepChoice = parseInt(pepPicked);
        mochaObject.peppermintSyrup = pepChoice;
    }
    mochaObject.milk = milkChoice;
    mochaObject.shot = espChoice;
    mochaObject.prepare();
});
const main = () => {
    let menuChoice = 0;
    const buildMocha = () => __awaiter(void 0, void 0, void 0, function* () {
        do {
            const optionPicked = yield showMenu();
            menuChoice = parseInt(optionPicked);
            switch (menuChoice) {
                case 0: {
                    break;
                }
                case 1: {
                    const whiteMocha = new WhiteChocolateMocha();
                    yield userOptions(whiteMocha);
                    break;
                }
                case 2: {
                    const darkMocha = new DarkChocolateMocha();
                    yield userOptions(darkMocha);
                    break;
                }
                case 3: {
                    const peppermintMocha = new PeppermintMocha();
                    yield userOptions(peppermintMocha);
                    break;
                }
                default: {
                    console.log('Option invalid, please choose from menu.');
                    break;
                }
            }
        } while (menuChoice != 0);
        // end readline process
        rl.close();
    });
    buildMocha();
};
// launch the app
main();
