var expand = require("./");
var path = require("path");
var home = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];

if (!home) throw new Error('Failed');

it('expands ~/', function(){
  var expected = path.join(home, '/foo/bar/qux.corge');
  expect(expand('~/foo/bar/qux.corge')).to.equal(expected);
  expect(expand('/foo/bar/qux.corge')).to.equal('/foo/bar/qux.corge');
  expect(expand('~')).to.equal(home);
});
