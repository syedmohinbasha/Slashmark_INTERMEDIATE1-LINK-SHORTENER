<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <h1>URL</h1>
    <form action="/shortUrls" method="POST" class="my-4 form-inline">
      <label for="fullUrl" class="sr-only">Url</label>
      <input required placeholder="Url" type="url" name="fullUrl" id="fullUrl" class="form-control col mr-2">
      <button class="btn btn-success" type="submit">Button</button>
    </form>
    
    <table class="table table-striped table-responsive">
      <thead>
        <tr>
          <th>Full URL</th>
          <th>Short URL</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        <% shortUrls.forEach(shortUrl => { %>
          <tr>
            <td><a href="<%= shortUrl.full %>"><%= shortUrl.full %></a></td>
            <td><a href="<%= shortUrl.short %>"><%= shortUrl.short %></a></td>
            <td><%= shortUrl.clicks %></td>
          </tr>
        <% }) %>
      </tbody>
    </table>
  </div>
</body>
</html>
