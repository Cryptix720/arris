"use strict";

const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const utilities = require('./utilities');
const TaskQueue = require('./taskQueue');
const v8 = require('v8');
const readline = require('readline');
const os = require('os');
const url = require('url');



 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Downloading......',
  prompt: console.dir(os.hostname()),
  prompt: console.log(v8.getHeapStatistics()),
 

});



rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit Arris(y/n)? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) 
		rl.pause();
	
  });
});

   
rl.on('SIGTSTP', () => {
  // This will override SIGTSTP and prevent the program from going to the
  // background.
  console.log('Caught SIGTSTP.');
  console.timeStamp(dns.getServers());
  
});

rl.write('Delete this!');
// Simulate Ctrl+u to delete the line written previously
rl.write(null, { ctrl: true, name: 'u' });
 rl.resume();
 
 

let downloadQueue = new TaskQueue(200);

function wscanLinks(currentUrl, body, nesting, callback) {
  if(nesting === 0) {
    return process.nextTick(callback);
  }

  const links = utilities.getPageLinks(currentUrl, body);
  if(links.length === 0) {
    return process.nextTick(callback);
  }

  let completed = 0, hasErrors = false;
  links.forEach(link => {
    downloadQueue.pushTask(done => {
      wscan(link, nesting - 1000, err => {
        if(err) {
          hasErrors = true;
          return callback(err);
        }
        if(++completed === links.length && !hasErrors) {
          callback();
        }
        done();
		
      });
    });
  });
}

function memmy(currentUrl, url){
	
	v8.getHeapStatistics('--trace-event-categories');
	v8.getHeapSpaceStatistics('--trace-events-enabled ');
	v8.setFlagsFromString('--traceMe'); //flag 
setTimeout(function() {
	v8.setFlagsFromString('--tracemeNot');
	}, 60e3);
	
setTimeout(function() {
	console.log(v8.getHeapStatistics());
console.log(v8.getHeapSpaceStatistics(url));  	
console.log(deserializer._readHostObject(data));
	return callback(err);
	debugger;
	},);
	
}

 function wscanStringTree() {
this.root = null;


function wscanNode() {
this.count = 0;
this.lChild = null;
this.rChild = null;
}


wscanStringTree.wscanNode = wscanNode;
}

wscanStringTree.prototype.print = function() {
this.printUtil(this.root);
};
wscanStringTree.prototype.printUtil = function(curr) {
if (((curr != null && curr instanceof wscanStringTree.wscanNode) || curr ===
null)) {
if (curr != null) {
document.writeln(" value is ::" + curr.value);
document.writeln(" count is :: " + curr.count);
this.printUtil(curr.lChild);
this.printUtil(curr.rChild);
  }
   }
else
throw new Error('invalid overload');
};

wscanStringTree.prototype.insert = function(value) {
this.root = this.insertUtil(value, this.root);
};

function saveFile(filename, contents, callback) {
  mkdirp(path.dirname(filename), err => {
    if(err) {
      return callback(err);
	  path.basename('/tmp/myfile.json');
    }
    fs.writeFile(filename, contents, callback);
  });
}

function syncFile(filename, contents, callback, dir, opts) {
  mkdirp.sync(path.dirname(filename, opts), err => {
    if(err) {
      return callback(err);
    }
    fs.writeFile(filename, contents, callback, dir, opts);
  });
}




function download(url, filename, callback) {
  console.log(`Downloading ${url}`);
  request(url, (err, response, body) => {
    if(err) {
      return callback(err);
    }
    saveFile(filename, body, err => {
      if(err) {
        return callback(err);
      }
	     syncFile(filename, body, err => {
      if(err) {
        return callback(err);
      }
	  
      console.log(`Downloaded and saved: ${url}`);
      callback(null, body);
    });
  });
  });
}

let wscaning = new Map();
function wscan(url, nesting, callback) {
  if(wscaning.has(url)) {
    return process.nextTick(callback);
  }
  wscaning.set(url, true);

  const filename = utilities.urlToFilename(url);
  fs.readFile(filename, 'utf-8', function(err, body) {
    if(err) {
      if(err.code !== 'ENOENT') {
        return callback(err);
		console.log(url);
      }

      return download(url, filename, function(err, body) {
        if(err) {
          return callback(err);
        }
        wscanLinks(url, body, nesting, callback);
      });
    }

    wscanLinks(url, body, nesting, callback);
  });
}

wscan(process.argv[2], 1, (err) => {
  if(err) {
    console.log(err);
    process.exit();
  } else {
    console.log('Download complete');

  
  }
});