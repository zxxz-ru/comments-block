// get post by id
function getPostById(model, i) {
return model.posts.find(function(p){
  return (p.id == i);
});
}

export function addLikes(model, id) {
const post = getPostById(model, id);
post.likes += 1;
  return model;
}

