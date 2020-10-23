const fetch = require('node-fetch');

const body = {
    "top": 5,
    "query": {
        "filters": {
            "ContentTypeFilter": {
                "field": "content_type",
                "value": "Opinion"
            }
        }
    },
    "orderBy": {
        "dates": "desc"
    },
    "fields": [
        "title",
        "summary",
        "coverImage"
    ]
};

// exports.sourceNodes =  async () =>{
//     const response =  await fetch('https://uat-api.euromoneydigital.com/data-service/queries/telecoms-articles/search',{
//         method: 'post',
//         body:    JSON.stringify(body),
//         headers: { 
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qVTBNa1F6UkRZMFJrRTVPRVl5TjBNek9EWTBOVGRCUkVVd1FUVTJOVEpHTnpRd1FrRTNRZyJ9.eyJodHRwczovL2NsYWltcy5lbWlpLmNvbS9kaXZpc2lvbiI6IkNlbnRyYWwgVGVjaG5vbG9neSIsImh0dHBzOi8vY2xhaW1zLmVtaWkuY29tL2RhdGEtc2VydmljZS90ZW5hbnRzIjpbImJyb2FkZ3JvdXAiXSwiaXNzIjoiaHR0cHM6Ly9lbS1icm9hZGdyb3VwLXVhdC5ldS5hdXRoMC5jb20vIiwic3ViIjoidWZvMGVtNkpsZlBmTXdSd1hTQzJuVFdBV2xiTjdGUXRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdWF0LWFwaS5ldXJvbW9uZXlkaWdpdGFsLmNvbS9kYXRhLXNlcnZpY2UvIiwiaWF0IjoxNjAzNDQ3NDU1LCJleHAiOjE2MDM1MzM4NTUsImF6cCI6InVmbzBlbTZKbGZQZk13UndYU0MyblRXQVdsYk43RlF0Iiwic2NvcGUiOiJzZWFyY2g6ZG9jdW1lbnRzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOlsic2VhcmNoOmRvY3VtZW50cyJdfQ.e33hElxwsi7hvMwXCeYBPRDkuxibyaH3-7Jjt2F4wISNhK9rU9rPVefd9rJO8OVWKdyWCtu8HI1jVhwu3RpIsEWra-Lj44SXQuRFKPwWRPMhVv0ar-ew1MUdoyAsEY_YflGmT2Y0xbBcr89Ea78_IiHvdvnDQxjM085P46RBOkhEw5Xus0PLWdEKcOqrX7_yPl3Ou4sL3rxYXz3RXp4QuiFt6dFt5kYh9DrX8rUZT__M9w50bvCej3Wji8b353KxcI7o2sTbZydimsHvKvzla49HxsCw5efgPvobILvw3pLeru5FSHP4NJfWaun2jZbS_gSOdtQD6xImAeRjrvWi5A' },
//     });
//     const json = await response.json();
//     console.log('json', json)   
// }

///////\\\\\\
//const axios = require('axios');

//const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

const getArticlesData = async () =>{
    const response =  await fetch('https://uat-api.euromoneydigital.com/data-service/queries/telecoms-articles/search',{
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qVTBNa1F6UkRZMFJrRTVPRVl5TjBNek9EWTBOVGRCUkVVd1FUVTJOVEpHTnpRd1FrRTNRZyJ9.eyJodHRwczovL2NsYWltcy5lbWlpLmNvbS9kaXZpc2lvbiI6IkNlbnRyYWwgVGVjaG5vbG9neSIsImh0dHBzOi8vY2xhaW1zLmVtaWkuY29tL2RhdGEtc2VydmljZS90ZW5hbnRzIjpbImJyb2FkZ3JvdXAiXSwiaXNzIjoiaHR0cHM6Ly9lbS1icm9hZGdyb3VwLXVhdC5ldS5hdXRoMC5jb20vIiwic3ViIjoidWZvMGVtNkpsZlBmTXdSd1hTQzJuVFdBV2xiTjdGUXRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdWF0LWFwaS5ldXJvbW9uZXlkaWdpdGFsLmNvbS9kYXRhLXNlcnZpY2UvIiwiaWF0IjoxNjAzNDQ3NDU1LCJleHAiOjE2MDM1MzM4NTUsImF6cCI6InVmbzBlbTZKbGZQZk13UndYU0MyblRXQVdsYk43RlF0Iiwic2NvcGUiOiJzZWFyY2g6ZG9jdW1lbnRzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOlsic2VhcmNoOmRvY3VtZW50cyJdfQ.e33hElxwsi7hvMwXCeYBPRDkuxibyaH3-7Jjt2F4wISNhK9rU9rPVefd9rJO8OVWKdyWCtu8HI1jVhwu3RpIsEWra-Lj44SXQuRFKPwWRPMhVv0ar-ew1MUdoyAsEY_YflGmT2Y0xbBcr89Ea78_IiHvdvnDQxjM085P46RBOkhEw5Xus0PLWdEKcOqrX7_yPl3Ou4sL3rxYXz3RXp4QuiFt6dFt5kYh9DrX8rUZT__M9w50bvCej3Wji8b353KxcI7o2sTbZydimsHvKvzla49HxsCw5efgPvobILvw3pLeru5FSHP4NJfWaun2jZbS_gSOdtQD6xImAeRjrvWi5A' },
    });
    const json = await response.json();
    console.log('json', json);  
    return json.results;   
}

exports.createPages = async ({ actions: { createPage } }) => {
  const allArticles = await getArticlesData();

  // Create a page that lists all Articles.
  createPage({
    path: `/articles`,
    component: require.resolve('./src/templates/all-articles.js'),
    context: { allArticles }
  });

  // Create a page for each Article.
  allArticles.forEach(article => {
    console.log('article', article);  
    createPage({
      path: `/article/${article.id.substring(article.id.lastIndexOf('/') + 1)}/`,
      component: require.resolve('./src/templates/article.js'),
      context: { article }
    });

    // // Create a page for each ability of the current Pokémon.
    // pokemon.abilities.forEach(ability => {
    //   createPage({
    //     path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
    //     component: require.resolve('./src/templates/ability.js'),
    //     context: { pokemon, ability }
    //   });
    // });
  });
};

