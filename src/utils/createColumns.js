const makeSorter = (obj) => {
  obj.map((c) => {
    const param = c.dataIndex;
    if (c.type === 'string' || c.type === 'boolean') {
      return (c.sorter = (a, b) => a[param].length - b[param].length);
    }

    return (c.sorter = (a, b) => a[param] - b[param]);
  });

  return obj;
};

const createColumns = (table) => {
  let result = table.header.map((h) => {
    let columns = {
      title: h.caption,
      dataIndex: h.id,
      key: h.id,
      type: h.type,
    };

    if (h.align) columns.align = h.align;
    else {
      switch (h.type) {
        case 'string':
          columns.align = 'left';
          break;
        case 'boolean':
          columns.align = 'center';
          break;
        default:
          columns.align = 'right';
          break;
      }
    }

    return columns;
  });

  result = makeSorter(result);

  return result;
};

export default createColumns;
