"use strict";
var xe=Object.create,j=Object.defineProperty;var ve=Object.getOwnPropertyDescriptor;var Ee=Object.getOwnPropertyNames;var Se=Object.getPrototypeOf,Ce=Object.prototype.hasOwnProperty;var Oe=e=>j(e,"__esModule",{value:!0});var w=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var $e=(e,t,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ee(t))!Ce.call(e,r)&&r!=="default"&&j(e,r,{get:()=>t[r],enumerable:!(i=ve(t,r))||i.enumerable});return e},T=e=>$e(Oe(j(e!=null?xe(Se(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var P=w(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});function ke(e){return e==null?"":typeof e=="string"||e instanceof String?e:JSON.stringify(e)}W.toCommandValue=ke});var Q=w(E=>{"use strict";var Te=E&&E.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(E,"__esModule",{value:!0});var Pe=Te(require("os")),L=P();function H(e,t,i){let r=new z(e,t,i);process.stdout.write(r.toString()+Pe.EOL)}E.issueCommand=H;function Ae(e,t=""){H(e,{},t)}E.issue=Ae;var G="::",z=class{constructor(t,i,r){t||(t="missing.command"),this.command=t,this.properties=i,this.message=r}toString(){let t=G+this.command;if(this.properties&&Object.keys(this.properties).length>0){t+=" ";let i=!0;for(let r in this.properties)if(this.properties.hasOwnProperty(r)){let s=this.properties[r];s&&(i?i=!1:t+=",",t+=`${r}=${Ie(s)}`)}}return t+=`${G}${Ne(this.message)}`,t}};function Ne(e){return L.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function Ie(e){return L.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}});var J=w(O=>{"use strict";var B=O&&O.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(O,"__esModule",{value:!0});var X=B(require("fs")),De=B(require("os")),qe=P();function je(e,t){let i=process.env[`GITHUB_${e}`];if(!i)throw new Error(`Unable to find environment variable for file command ${e}`);if(!X.existsSync(i))throw new Error(`Missing file at path: ${i}`);X.appendFileSync(i,`${qe.toCommandValue(t)}${De.EOL}`,{encoding:"utf8"})}O.issueCommand=je});var re=w(d=>{"use strict";var We=d&&d.__awaiter||function(e,t,i,r){function s(n){return n instanceof i?n:new i(function(o){o(n)})}return new(i||(i=Promise))(function(n,o){function f(l){try{c(r.next(l))}catch(b){o(b)}}function h(l){try{c(r.throw(l))}catch(b){o(b)}}function c(l){l.done?n(l.value):s(l.value).then(f,h)}c((r=r.apply(e,t||[])).next())})},Z=d&&d.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(d,"__esModule",{value:!0});var g=Q(),K=J(),Fe=P(),A=Z(require("os")),Re=Z(require("path")),Y;(function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"})(Y=d.ExitCode||(d.ExitCode={}));function Ue(e,t){let i=Fe.toCommandValue(t);if(process.env[e]=i,process.env.GITHUB_ENV||""){let s="_GitHubActionsFileCommandDelimeter_",n=`${e}<<${s}${A.EOL}${i}${A.EOL}${s}`;K.issueCommand("ENV",n)}else g.issueCommand("set-env",{name:e},i)}d.exportVariable=Ue;function Me(e){g.issueCommand("add-mask",{},e)}d.setSecret=Me;function Ve(e){process.env.GITHUB_PATH||""?K.issueCommand("PATH",e):g.issueCommand("add-path",{},e),process.env.PATH=`${e}${Re.delimiter}${process.env.PATH}`}d.addPath=Ve;function Le(e,t){let i=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!i)throw new Error(`Input required and not supplied: ${e}`);return i.trim()}d.getInput=Le;function He(e,t){process.stdout.write(A.EOL),g.issueCommand("set-output",{name:e},t)}d.setOutput=He;function Ge(e){g.issue("echo",e?"on":"off")}d.setCommandEcho=Ge;function ze(e){process.exitCode=Y.Failure,ee(e)}d.setFailed=ze;function Qe(){return process.env.RUNNER_DEBUG==="1"}d.isDebug=Qe;function Be(e){g.issueCommand("debug",{},e)}d.debug=Be;function ee(e){g.issue("error",e instanceof Error?e.toString():e)}d.error=ee;function Xe(e){g.issue("warning",e instanceof Error?e.toString():e)}d.warning=Xe;function Je(e){process.stdout.write(e+A.EOL)}d.info=Je;function te(e){g.issue("group",e)}d.startGroup=te;function ie(){g.issue("endgroup")}d.endGroup=ie;function Ze(e,t){return We(this,void 0,void 0,function*(){te(e);let i;try{i=yield t()}finally{ie()}return i})}d.group=Ze;function Ke(e,t){g.issueCommand("save-state",{name:e},t)}d.saveState=Ke;function Ye(e){return process.env[`STATE_${e}`]||""}d.getState=Ye});var F=w(u=>{"use strict";var N=u&&u.__awaiter||function(e,t,i,r){function s(n){return n instanceof i?n:new i(function(o){o(n)})}return new(i||(i=Promise))(function(n,o){function f(l){try{c(r.next(l))}catch(b){o(b)}}function h(l){try{c(r.throw(l))}catch(b){o(b)}}function c(l){l.done?n(l.value):s(l.value).then(f,h)}c((r=r.apply(e,t||[])).next())})},se=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t},p;Object.defineProperty(u,"__esModule",{value:!0});var et=require("assert"),tt=se(require("fs")),S=se(require("path"));p=tt.promises,u.chmod=p.chmod,u.copyFile=p.copyFile,u.lstat=p.lstat,u.mkdir=p.mkdir,u.readdir=p.readdir,u.readlink=p.readlink,u.rename=p.rename,u.rmdir=p.rmdir,u.stat=p.stat,u.symlink=p.symlink,u.unlink=p.unlink;u.IS_WINDOWS=process.platform==="win32";function it(e){return N(this,void 0,void 0,function*(){try{yield u.stat(e)}catch(t){if(t.code==="ENOENT")return!1;throw t}return!0})}u.exists=it;function rt(e,t=!1){return N(this,void 0,void 0,function*(){return(t?yield u.stat(e):yield u.lstat(e)).isDirectory()})}u.isDirectory=rt;function st(e){if(e=ot(e),!e)throw new Error('isRooted() parameter "p" cannot be empty');return u.IS_WINDOWS?e.startsWith("\\")||/^[A-Z]:/i.test(e):e.startsWith("/")}u.isRooted=st;function ne(e,t=1e3,i=1){return N(this,void 0,void 0,function*(){if(et.ok(e,"a path argument must be provided"),e=S.resolve(e),i>=t)return u.mkdir(e);try{yield u.mkdir(e);return}catch(r){switch(r.code){case"ENOENT":{yield ne(S.dirname(e),t,i+1),yield u.mkdir(e);return}default:{let s;try{s=yield u.stat(e)}catch(n){throw r}if(!s.isDirectory())throw r}}}})}u.mkdirP=ne;function nt(e,t){return N(this,void 0,void 0,function*(){let i;try{i=yield u.stat(e)}catch(s){s.code!=="ENOENT"&&console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${s}`)}if(i&&i.isFile()){if(u.IS_WINDOWS){let s=S.extname(e).toUpperCase();if(t.some(n=>n.toUpperCase()===s))return e}else if(oe(i))return e}let r=e;for(let s of t){e=r+s,i=void 0;try{i=yield u.stat(e)}catch(n){n.code!=="ENOENT"&&console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${n}`)}if(i&&i.isFile()){if(u.IS_WINDOWS){try{let n=S.dirname(e),o=S.basename(e).toUpperCase();for(let f of yield u.readdir(n))if(o===f.toUpperCase()){e=S.join(n,f);break}}catch(n){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${n}`)}return e}else if(oe(i))return e}}return""})}u.tryGetExecutablePath=nt;function ot(e){return e=e||"",u.IS_WINDOWS?(e=e.replace(/\//g,"\\"),e.replace(/\\\\+/g,"\\")):e.replace(/\/\/+/g,"/")}function oe(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}});var de=w(m=>{"use strict";var _=m&&m.__awaiter||function(e,t,i,r){function s(n){return n instanceof i?n:new i(function(o){o(n)})}return new(i||(i=Promise))(function(n,o){function f(l){try{c(r.next(l))}catch(b){o(b)}}function h(l){try{c(r.throw(l))}catch(b){o(b)}}function c(l){l.done?n(l.value):s(l.value).then(f,h)}c((r=r.apply(e,t||[])).next())})},R=m&&m.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(m,"__esModule",{value:!0});var lt=R(require("child_process")),y=R(require("path")),ct=require("util"),a=R(F()),U=ct.promisify(lt.exec);function ut(e,t,i={}){return _(this,void 0,void 0,function*(){let{force:r,recursive:s}=ft(i),n=(yield a.exists(t))?yield a.stat(t):null;if(n&&n.isFile()&&!r)return;let o=n&&n.isDirectory()?y.join(t,y.basename(e)):t;if(!(yield a.exists(e)))throw new Error(`no such file or directory: ${e}`);if((yield a.stat(e)).isDirectory())if(s)yield ae(e,o,0,r);else throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`);else{if(y.relative(e,o)==="")throw new Error(`'${o}' and '${e}' are the same file`);yield fe(e,o,r)}})}m.cp=ut;function at(e,t,i={}){return _(this,void 0,void 0,function*(){if(yield a.exists(t)){let r=!0;if((yield a.isDirectory(t))&&(t=y.join(t,y.basename(e)),r=yield a.exists(t)),r)if(i.force==null||i.force)yield le(t);else throw new Error("Destination already exists")}yield M(y.dirname(t)),yield a.rename(e,t)})}m.mv=at;function le(e){return _(this,void 0,void 0,function*(){if(a.IS_WINDOWS){try{(yield a.isDirectory(e,!0))?yield U(`rd /s /q "${e}"`):yield U(`del /f /a "${e}"`)}catch(t){if(t.code!=="ENOENT")throw t}try{yield a.unlink(e)}catch(t){if(t.code!=="ENOENT")throw t}}else{let t=!1;try{t=yield a.isDirectory(e)}catch(i){if(i.code!=="ENOENT")throw i;return}t?yield U(`rm -rf "${e}"`):yield a.unlink(e)}})}m.rmRF=le;function M(e){return _(this,void 0,void 0,function*(){yield a.mkdirP(e)})}m.mkdirP=M;function ce(e,t){return _(this,void 0,void 0,function*(){if(!e)throw new Error("parameter 'tool' is required");if(t){let r=yield ce(e,!1);if(!r)throw a.IS_WINDOWS?new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`):new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);return r}let i=yield ue(e);return i&&i.length>0?i[0]:""})}m.which=ce;function ue(e){return _(this,void 0,void 0,function*(){if(!e)throw new Error("parameter 'tool' is required");let t=[];if(a.IS_WINDOWS&&process.env.PATHEXT)for(let s of process.env.PATHEXT.split(y.delimiter))s&&t.push(s);if(a.isRooted(e)){let s=yield a.tryGetExecutablePath(e,t);return s?[s]:[]}if(e.includes(y.sep))return[];let i=[];if(process.env.PATH)for(let s of process.env.PATH.split(y.delimiter))s&&i.push(s);let r=[];for(let s of i){let n=yield a.tryGetExecutablePath(y.join(s,e),t);n&&r.push(n)}return r})}m.findInPath=ue;function ft(e){let t=e.force==null?!0:e.force,i=Boolean(e.recursive);return{force:t,recursive:i}}function ae(e,t,i,r){return _(this,void 0,void 0,function*(){if(i>=255)return;i++,yield M(t);let s=yield a.readdir(e);for(let n of s){let o=`${e}/${n}`,f=`${t}/${n}`;(yield a.lstat(o)).isDirectory()?yield ae(o,f,i,r):yield fe(o,f,r)}yield a.chmod(t,(yield a.stat(e)).mode)})}function fe(e,t,i){return _(this,void 0,void 0,function*(){if((yield a.lstat(e)).isSymbolicLink()){try{yield a.lstat(t),yield a.unlink(t)}catch(s){s.code==="EPERM"&&(yield a.chmod(t,"0666"),yield a.unlink(t))}let r=yield a.readlink(e);yield a.symlink(r,t,a.IS_WINDOWS?"junction":null)}else(!(yield a.exists(t))||i)&&(yield a.copyFile(e,t))})}});var pe=w(x=>{"use strict";var dt=x&&x.__awaiter||function(e,t,i,r){function s(n){return n instanceof i?n:new i(function(o){o(n)})}return new(i||(i=Promise))(function(n,o){function f(l){try{c(r.next(l))}catch(b){o(b)}}function h(l){try{c(r.throw(l))}catch(b){o(b)}}function c(l){l.done?n(l.value):s(l.value).then(f,h)}c((r=r.apply(e,t||[])).next())})},C=x&&x.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(x,"__esModule",{value:!0});var I=C(require("os")),be=C(require("events")),bt=C(require("child_process")),ht=C(require("path")),pt=C(de()),mt=C(F()),D=process.platform==="win32",he=class extends be.EventEmitter{constructor(t,i,r){super();if(!t)throw new Error("Parameter 'toolPath' cannot be null or empty.");this.toolPath=t,this.args=i||[],this.options=r||{}}_debug(t){this.options.listeners&&this.options.listeners.debug&&this.options.listeners.debug(t)}_getCommandString(t,i){let r=this._getSpawnFileName(),s=this._getSpawnArgs(t),n=i?"":"[command]";if(D)if(this._isCmdFile()){n+=r;for(let o of s)n+=` ${o}`}else if(t.windowsVerbatimArguments){n+=`"${r}"`;for(let o of s)n+=` ${o}`}else{n+=this._windowsQuoteCmdArg(r);for(let o of s)n+=` ${this._windowsQuoteCmdArg(o)}`}else{n+=r;for(let o of s)n+=` ${o}`}return n}_processLineBuffer(t,i,r){try{let s=i+t.toString(),n=s.indexOf(I.EOL);for(;n>-1;){let o=s.substring(0,n);r(o),s=s.substring(n+I.EOL.length),n=s.indexOf(I.EOL)}i=s}catch(s){this._debug(`error processing line. Failed with error ${s}`)}}_getSpawnFileName(){return D&&this._isCmdFile()?process.env.COMSPEC||"cmd.exe":this.toolPath}_getSpawnArgs(t){if(D&&this._isCmdFile()){let i=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(let r of this.args)i+=" ",i+=t.windowsVerbatimArguments?r:this._windowsQuoteCmdArg(r);return i+='"',[i]}return this.args}_endsWith(t,i){return t.endsWith(i)}_isCmdFile(){let t=this.toolPath.toUpperCase();return this._endsWith(t,".CMD")||this._endsWith(t,".BAT")}_windowsQuoteCmdArg(t){if(!this._isCmdFile())return this._uvQuoteCmdArg(t);if(!t)return'""';let i=[" ","	","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'],r=!1;for(let o of t)if(i.some(f=>f===o)){r=!0;break}if(!r)return t;let s='"',n=!0;for(let o=t.length;o>0;o--)s+=t[o-1],n&&t[o-1]==="\\"?s+="\\":t[o-1]==='"'?(n=!0,s+='"'):n=!1;return s+='"',s.split("").reverse().join("")}_uvQuoteCmdArg(t){if(!t)return'""';if(!t.includes(" ")&&!t.includes("	")&&!t.includes('"'))return t;if(!t.includes('"')&&!t.includes("\\"))return`"${t}"`;let i='"',r=!0;for(let s=t.length;s>0;s--)i+=t[s-1],r&&t[s-1]==="\\"?i+="\\":t[s-1]==='"'?(r=!0,i+="\\"):r=!1;return i+='"',i.split("").reverse().join("")}_cloneExecOptions(t){t=t||{};let i={cwd:t.cwd||process.cwd(),env:t.env||process.env,silent:t.silent||!1,windowsVerbatimArguments:t.windowsVerbatimArguments||!1,failOnStdErr:t.failOnStdErr||!1,ignoreReturnCode:t.ignoreReturnCode||!1,delay:t.delay||1e4};return i.outStream=t.outStream||process.stdout,i.errStream=t.errStream||process.stderr,i}_getSpawnOptions(t,i){t=t||{};let r={};return r.cwd=t.cwd,r.env=t.env,r.windowsVerbatimArguments=t.windowsVerbatimArguments||this._isCmdFile(),t.windowsVerbatimArguments&&(r.argv0=`"${i}"`),r}exec(){return dt(this,void 0,void 0,function*(){return!mt.isRooted(this.toolPath)&&(this.toolPath.includes("/")||D&&this.toolPath.includes("\\"))&&(this.toolPath=ht.resolve(process.cwd(),this.options.cwd||process.cwd(),this.toolPath)),this.toolPath=yield pt.which(this.toolPath,!0),new Promise((t,i)=>{this._debug(`exec tool: ${this.toolPath}`),this._debug("arguments:");for(let c of this.args)this._debug(`   ${c}`);let r=this._cloneExecOptions(this.options);!r.silent&&r.outStream&&r.outStream.write(this._getCommandString(r)+I.EOL);let s=new q(r,this.toolPath);s.on("debug",c=>{this._debug(c)});let n=this._getSpawnFileName(),o=bt.spawn(n,this._getSpawnArgs(r),this._getSpawnOptions(this.options,n)),f="";o.stdout&&o.stdout.on("data",c=>{this.options.listeners&&this.options.listeners.stdout&&this.options.listeners.stdout(c),!r.silent&&r.outStream&&r.outStream.write(c),this._processLineBuffer(c,f,l=>{this.options.listeners&&this.options.listeners.stdline&&this.options.listeners.stdline(l)})});let h="";if(o.stderr&&o.stderr.on("data",c=>{s.processStderr=!0,this.options.listeners&&this.options.listeners.stderr&&this.options.listeners.stderr(c),!r.silent&&r.errStream&&r.outStream&&(r.failOnStdErr?r.errStream:r.outStream).write(c),this._processLineBuffer(c,h,l=>{this.options.listeners&&this.options.listeners.errline&&this.options.listeners.errline(l)})}),o.on("error",c=>{s.processError=c.message,s.processExited=!0,s.processClosed=!0,s.CheckComplete()}),o.on("exit",c=>{s.processExitCode=c,s.processExited=!0,this._debug(`Exit code ${c} received from tool '${this.toolPath}'`),s.CheckComplete()}),o.on("close",c=>{s.processExitCode=c,s.processExited=!0,s.processClosed=!0,this._debug(`STDIO streams have closed for tool '${this.toolPath}'`),s.CheckComplete()}),s.on("done",(c,l)=>{f.length>0&&this.emit("stdline",f),h.length>0&&this.emit("errline",h),o.removeAllListeners(),c?i(c):t(l)}),this.options.input){if(!o.stdin)throw new Error("child process missing stdin");o.stdin.end(this.options.input)}})})}};x.ToolRunner=he;function gt(e){let t=[],i=!1,r=!1,s="";function n(o){r&&o!=='"'&&(s+="\\"),s+=o,r=!1}for(let o=0;o<e.length;o++){let f=e.charAt(o);if(f==='"'){r?n(f):i=!i;continue}if(f==="\\"&&r){n(f);continue}if(f==="\\"&&i){r=!0;continue}if(f===" "&&!i){s.length>0&&(t.push(s),s="");continue}n(f)}return s.length>0&&t.push(s.trim()),t}x.argStringToArray=gt;var q=class extends be.EventEmitter{constructor(t,i){super();if(this.processClosed=!1,this.processError="",this.processExitCode=0,this.processExited=!1,this.processStderr=!1,this.delay=1e4,this.done=!1,this.timeout=null,!i)throw new Error("toolPath must not be empty");this.options=t,this.toolPath=i,t.delay&&(this.delay=t.delay)}CheckComplete(){this.done||(this.processClosed?this._setResult():this.processExited&&(this.timeout=setTimeout(q.HandleTimeout,this.delay,this)))}_debug(t){this.emit("debug",t)}_setResult(){let t;this.processExited&&(this.processError?t=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`):this.processExitCode!==0&&!this.options.ignoreReturnCode?t=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`):this.processStderr&&this.options.failOnStdErr&&(t=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`))),this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.done=!0,this.emit("done",t,this.processExitCode)}static HandleTimeout(t){if(!t.done){if(!t.processClosed&&t.processExited){let i=`The STDIO streams did not close within ${t.delay/1e3} seconds of the exit event from process '${t.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;t._debug(i)}t._setResult()}}}});var ge=w(v=>{"use strict";var yt=v&&v.__awaiter||function(e,t,i,r){function s(n){return n instanceof i?n:new i(function(o){o(n)})}return new(i||(i=Promise))(function(n,o){function f(l){try{c(r.next(l))}catch(b){o(b)}}function h(l){try{c(r.throw(l))}catch(b){o(b)}}function c(l){l.done?n(l.value):s(l.value).then(f,h)}c((r=r.apply(e,t||[])).next())})},wt=v&&v.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(v,"__esModule",{value:!0});var me=wt(pe());function _t(e,t,i){return yt(this,void 0,void 0,function*(){let r=me.argStringToArray(e);if(r.length===0)throw new Error("Parameter 'commandLine' cannot be null or empty.");let s=r[0];return t=r.slice(1).concat(t||[]),new me.ToolRunner(s,t,i).exec()})}v.exec=_t});var $=T(re()),k=T(ge()),ye=T(require("fs")),V=T(require("os")),xt=e=>(0,$.getInput)(e).split(",").map(t=>t.trim()),vt={"ubuntu18.04":{chromium:["fonts-liberation","libasound2","libatk-bridge2.0-0","libatk1.0-0","libatspi2.0-0","libcairo2","libcups2","libdbus-1-3","libdrm2","libgbm1","libgdk-pixbuf2.0-0","libglib2.0-0","libgtk-3-0","libnspr4","libnss3","libpango-1.0-0","libpangocairo-1.0-0","libx11-6","libx11-xcb1","libxcb-dri3-0","libxcb1","libxcomposite1","libxdamage1","libxext6","libxfixes3","libxi6","libxrandr2","libxtst6"],firefox:["libatk1.0-0","libcairo-gobject2","libcairo2","libdbus-1-3","libdbus-glib-1-2","libfontconfig1","libfreetype6","libgdk-pixbuf2.0-0","libglib2.0-0","libgtk-3-0","libgtk2.0-0","libpango-1.0-0","libpangocairo-1.0-0","libpangoft2-1.0-0","libx11-6","libx11-xcb1","libxcb-shm0","libxcb1","libxcomposite1","libxcursor1","libxdamage1","libxext6","libxfixes3","libxi6","libxrender1","libxt6"],webkit:["gstreamer1.0-libav","gstreamer1.0-plugins-bad","gstreamer1.0-plugins-base","gstreamer1.0-plugins-good","libatk-bridge2.0-0","libatk1.0-0","libbrotli1","libcairo2","libegl1","libenchant1c2a","libepoxy0","libfontconfig1","libfreetype6","libgdk-pixbuf2.0-0","libgl1","libgles2","libglib2.0-0","libgstreamer-gl1.0-0","libgstreamer1.0-0","libgtk-3-0","libharfbuzz-icu0","libharfbuzz0b","libhyphen0","libicu60","libjpeg-turbo8","libnotify4","libopenjp2-7","libopus0","libpango-1.0-0","libpng16-16","libsecret-1-0","libvpx5","libwayland-client0","libwayland-egl1","libwayland-server0","libwebp6","libwebpdemux2","libwoff1","libx11-6","libxcomposite1","libxdamage1","libxkbcommon0","libxml2","libxslt1.1"]},"ubuntu20.04":{chromium:["fonts-liberation","libasound2","libatk-bridge2.0-0","libatk1.0-0","libatspi2.0-0","libcairo2","libcups2","libdbus-1-3","libdrm2","libgbm1","libgdk-pixbuf2.0-0","libglib2.0-0","libgtk-3-0","libnspr4","libnss3","libpango-1.0-0","libpangocairo-1.0-0","libx11-6","libx11-xcb1","libxcb-dri3-0","libxcb1","libxcomposite1","libxdamage1","libxext6","libxfixes3","libxi6","libxrandr2","libxtst6"],firefox:["libatk1.0-0","libcairo-gobject2","libcairo2","libdbus-1-3","libdbus-glib-1-2","libfontconfig1","libfreetype6","libgdk-pixbuf2.0-0","libglib2.0-0","libgtk-3-0","libgtk2.0-0","libpango-1.0-0","libpangocairo-1.0-0","libpangoft2-1.0-0","libx11-6","libx11-xcb1","libxcb-shm0","libxcb1","libxcomposite1","libxcursor1","libxdamage1","libxext6","libxfixes3","libxi6","libxrender1","libxt6"],webkit:["gstreamer1.0-libav","gstreamer1.0-plugins-bad","gstreamer1.0-plugins-base","gstreamer1.0-plugins-good","libatk-bridge2.0-0","libatk1.0-0","libcairo2","libegl1","libenchant1c2a","libepoxy0","libfontconfig1","libfreetype6","libgdk-pixbuf2.0-0","libgl1","libgles2","libglib2.0-0","libgstreamer-gl1.0-0","libgstreamer1.0-0","libgtk-3-0","libharfbuzz-icu0","libharfbuzz0b","libhyphen0","libicu66","libjpeg-turbo8","libnotify4","libopenjp2-7","libopus0","libpango-1.0-0","libpng16-16","libsecret-1-0","libsoup2.4-1","libvpx6","libwayland-client0","libwayland-egl1","libwayland-server0","libwebp6","libwebpdemux2","libwoff1","libx11-6","libxcomposite1","libxdamage1","libxkbcommon0","libxml2","libxslt1.1"]}};async function Et(){if(V.default.platform()!=="linux")return"";let e=await ye.default.promises.readFile("/etc/os-release","utf8");if(!e)return"";let t=new Map;for(let i of e.split(`
`)){let r=i.split("="),s=r.shift(),n=r.join("=").trim();n.startsWith('"')&&n.endsWith('"')&&(n=n.substring(1,n.length-1)),!!s&&t.set(s.toLowerCase(),n)}return!t.get("name")||t.get("name").toLowerCase()!=="ubuntu"?"":t.get("version_id")||""}function we(e,t){let i=[];return t.forEach(r=>{switch(r){case"chromium":case"firefox":case"webkit":i=i.concat(vt[e][r]);break;default:throw new Error(`Unrecognised browser ${r}`)}}),i}async function _e(){try{if(V.default.platform()==="linux"){await(0,k.exec)("sudo",["apt-get","update"]);let e=await Et(),t=xt("browsers"),i=[];if(e==="18.04")i=we("ubuntu18.04",t);else if(e==="20.04")i=we("ubuntu20.04",t);else throw new Error("Cannot install dependencies for this linux distribution");await(0,k.exec)("sudo",["apt-get","install","-y","--no-install-recommends",...i]),t.includes("firefox")&&await(0,k.exec)("sudo",["apt-get","install","-y","ffmpeg"]),(0,$.getInput)("headless")!=="true"&&await(0,k.exec)("sudo",["apt-get","install","-y","xvfb"])}}catch(e){(0,$.setFailed)(e.message||e)}}_e();
