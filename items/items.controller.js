const items = [];

const getItems = (req, res) => {
  const query = req.query;

  let itemsArrayDuplicate = items;
  if (query.size) {
    itemsArrayDuplicate = itemsArrayDuplicate.filter((itm) =>
      itm.size.includes(query.size)
    );
  }

  if (query.limit) {
    itemsArrayDuplicate = itemsArrayDuplicate.slice(0, req.limit - 1);
  }

  if (query.search) {
    itemsArrayDuplicate = itemsArrayDuplicate.filter(
      (itm =
        itm.size.includes(query.search) ||
        itm.name.includes(query.search) ||
        itm.price.includes(query.search))
    );
  }

  res.status(200).json({
    data: items,
    error: null,
  });
};

const createItems = (req, res) => {
  const item = req.body;
  // creating ID and pushing it to the body
  items.push({ ...req.body, id: Math.floor(Math.random() * 800).toString() });
  //   console.log(item)

  return res.status(201).json({
    data: items,
    error: null,
  });
};

const getOneItem = (req, res) => {
  const id = req.params.id;
  const foundItem = items.find((item) => item.id == parseInt(id));
  console.log(foundItem);
  if (!foundItem) {
    res.status(404).json(`item not found`);
  }
  res.status(200).json(foundItem);
};

const updateItem = (req, res) => {
  const id = req.params.id;
  const update = req.body;
  const itemIndex = items.findIndex((item) => item.id == parseInt(id));
  if (itemIndex == -1) {
    res.end(`item with id:${id}, not found`);
  }
  items[itemIndex] = { ...items[itemIndex], ...update };
  res.status(200).json(items[itemIndex]);
};

const deleteItem = (req, res) => {
  const id = req.params.id;
  const itemIndex = items.findIndex((item) => item.id == parseInt(id));

  if (itemIndex == -1) {
    res.status(404).json({ error: `item with id:${id}, not found` });
  }
  items.splice(itemIndex, 1);
  res.end(`item with ${id}, deleted successfully`);
  // res.status(204).send()
};

module.exports = {
  createItems,
  getItems,
  getOneItem,
  updateItem,
  deleteItem,
};
