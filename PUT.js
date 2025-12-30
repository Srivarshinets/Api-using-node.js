app.put('/person/:id', async (req, res) => {
  await Person.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    mobile: req.body.mobile
  });

  res.send('Person updated successfully');
});
