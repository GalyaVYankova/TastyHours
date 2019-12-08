const recipeService = {
  load: function (id, limit) {
    return fetch(`http://localhost:9999/api/recipe`).then(res => res.json());
  },
  create: function(data) {
    return fetch(`http://localhost:9999/api/recipe/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then(res => res.json());
  }
};

export default recipeService;