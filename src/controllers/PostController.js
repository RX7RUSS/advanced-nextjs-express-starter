import Post from '../models/Post';

const PostController = {
  list: (req, res, next) => {
    Post.find().exec()
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        next(err);
      });
  },
  show: (req, res, next) => {
    Post.findById(req.params.id).exec()
      .then(item => {
        res.json(item);
      })
      .catch(err => {
        next(err);
      });
  },
  create: (req, res, next) => {
    const post = new Post(req.body);

    post.save()
      .then(savedPost => {
        return res.json(savedPost);
      })
      .catch(err => {
        next(err);
      });
  },
  delete: (req, res, next) => {
    Post.findByIdAndRemove(req.params.id).exec()
      .then(item => {
        res.json(item);
      })
      .catch(err => {
        next(err);
      });
  },
  update: (req, res, next) => {
    Post.findById(req.params.id).exec()
      .then(item => {
        item.title = req.body.title || item.title;
        item.body = req.body.body || item.body;

        item.save()
          .then(updatedItem => {
            return res.json(updatedItem);
          })
          .catch(err => {
            next(err);
          });
      })
      .catch(err => {
        next(err);
      });
  }
};

export default PostController;
