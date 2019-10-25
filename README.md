# ext-log
extend console.log in order to print filename &amp;&amp; line number

<h5>Usage</h5>
load the package at the first line of your project entry point, say app.js<br/>
app.js<br/>
<pre>

require('ext-log')(__dirname);
const debug = require('debug')('myapp');

debug('log in here');

</pre>