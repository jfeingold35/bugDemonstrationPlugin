import {SfdxCommand} from '@salesforce/command';
import {CliUx} from '@oclif/core';

export default class BugDemo extends SfdxCommand {
  public static description = 'See the bug in action';
  public static longDescription = 'See the bug in action';


  protected static flagsConfig = {};

  public async run(): Promise<Object> {
    const data = [{name: 'some name', someProp: 'a value', someOtherProp: 'another value'}];
    const columns = ["name", "someProp", "someOtherProp"];
    const treatedColumns = {};
    for (const col of columns) {
      treatedColumns[col] = {
        header: col.split(/(?=[A-Z])|[-_\s]/).map((w) => w.toUpperCase()).join(' ')
      }
    };
    this.ux.table(data, columns);
    this.ux.cli.ux.table(data, treatedColumns);
    return {};
  }
}
