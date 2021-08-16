#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { stringify, parse } from '..';

const version = process.env.npm_package_version ?? '1.0.0';

const yargsFn = yargs(hideBin(process.argv));

const { argv } = yargsFn
  .scriptName('roman-numerals')
  .usage('Usage: $0 [options] <command> [<input>]')
  .command(
    'stringify <input>',
    'Takes an integer and converts it to a roman numeral.',
    () => {},
    (argvs): void => {
      try {
        const result = stringify(argvs.input as number);
        console.log(result);
      } catch (error) {
        console.log(error.message);
      }
    }
  )
  .command(
    'parse <input>',
    'Parse a roman numeral string into an integer.',
    () => {},
    (argvs): void => {
      try {
        const result = parse(argvs.input as string);
        console.log(result);
      } catch (error) {
        console.log(error.message);
      }
    }
  )
  .demandCommand()
  .alias('h', 'help')
  .help('h', 'Show this help.')
  .alias('v', 'version')
  .version('v', 'Show version number.', version);

if (!argv) yargs.showHelp();
