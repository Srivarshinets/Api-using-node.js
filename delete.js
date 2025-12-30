app.delete('/person/:id', async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.send('Person deleted successfully');
});
