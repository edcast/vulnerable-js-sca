import { ExploitCVE202121315Request, ExploitCVE202121315Response } from './../shared/types';
import si from 'systeminformation';

export const exploitCVE202121315 = async (
  args: ExploitCVE202121315Request,
  context: any,
): Promise<ExploitCVE202121315Response> => {

  const systemInformation = await new Promise((resolve, reject) => {
    /*
    Note: args.query is a string[], but the `services` function only expects a string... or so it says.
    This is a slightly contrived example as in reality you would probably only ever pass a string, but
    this other POC shows how this can be confused with a normal REST api pattern:
    https://github.com/ForbiddenProgrammer/CVE-2021-21315-PoC/blob/master/index.js#L11
    */

    //@ts-ignore
    si.services(args.query).then((data) => { 
      resolve(data);
    }).catch(e => {
      resolve(e);
    });
  });

  return {
    info: systemInformation
  }
}