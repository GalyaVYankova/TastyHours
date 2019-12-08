const pictureService = {
  load: function () {
    return fetch(`http://localhost:9999/api/picture/`).then(res => res.json());
  },
  create: function(data) {
    return fetch(`http://localhost:9999/api/picture/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then(res => res);
  }
};

export default pictureService;