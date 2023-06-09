class Console {
  constructor (area) {
    this.lines = [];
    this.area = area;
  }
  print(s) {
    this.puts(s);
    this.render();
  }
  puts(s) {
    this.lines.push(s);
  }

  putlines(lines) {
    this.lines = this.lines.concat(lines)
  }

  setlines(lines) {
    this.lines = lines
  }
  render() {
    this.area.value = this.lines.join('\n')
  }

  clear() {
    this.lines = [];
    this.area.value = '';
  }
}
  const write = (s) => { document.write(s); };
  const elem = (id) => document.getElementById(id);

  const renderApp = () => {
    write('<div id="app">\n');
    //renderHeader();
    write('<textarea id="log" readonly></textarea>\n');
    write('</div>\n');
  };

  // renderApp();
  // const log = elem('log');
  //
  // const putlines = (aa) => {
  //   log.value = aa.join('\n');
  // };

  // ---

  const formatNumber = (value, places) => {
    const len = value.toString().length;
    const spaces = Math.max(0, places - len);
    return `${' '.repeat(spaces)}${value}`;
  };

  const formatDict = (dict) => {
    const aa = [];
    for (const k in dict) {
      const value = dict[k];
      let repr = typeof value === 'string' ? `"${value}"` : value;
      aa.push(`${k}: ${repr}`);
    }
    return `{${aa.join(', ')}}`;
  };
