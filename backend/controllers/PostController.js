const { Posts, User, Comments } = require("../db/schema");

const GetPosts = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const offset =
      page === "1" ? 0 : Math.floor(parseInt(page) * parseInt(limit));
    const posts = await Posts.find()
      .limit(parseInt(limit))
      .skip(offset)
      .sort({ popularity_rating: "desc" });
    res.send(posts);
  } catch (error) {
    throw error;
  }
};

const GetPostById = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.post_id).populate([
      {
        model: "users",
        path: "user_id",
        select: "_id name",
      },
      {
        path: "comments",
        populate: {
          path: "user_id",
          model: "users",
          select: "_id name",
        },
      },
    ]);
    res.send(post);
  } catch (error) {
    throw error;
  }
};

const CreatePost = async (req, res) => {
  try {
    const newPost = new Posts({ ...req.body, user_id: req.params.user_id });
    newPost.save();
    res.send(newPost);
  } catch (error) {
    throw error;
  }
};

const DeletePost = async (req, res) => {
  console.log("Delete Post:", req.params.post_id);
  try {
    const post = await Posts.findById(req.params.post_id);
    console.log("Found Post", post);
    await Comments.deleteOne({ _id: { $in: post.comments } });
    await Posts.findByIdAndDelete(req.params.post_id);
    res.send({ msg: "Post deleted" });
  } catch (error) {
    throw error;
  }
};

const UpdatePost = async (req, res) => {
  try {
    await Posts.findByIdAndUpdate(
      req.params.post_id,
      {
        ...req.body,
      },
      { new: true, useFindAndModify: false }
      // (err, (d) => (err ? err : res.send(d)))
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetPosts,
  GetPostById,
  CreatePost,
  DeletePost,
  UpdatePost,
};
