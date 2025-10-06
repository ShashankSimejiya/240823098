const Song = require('../Models/SongModel');

exports.index = (req, res) => {
    Song.find()
    .then((allSongs) => {
        console.log("All Songs Retrieved Successfully : ", allSongs);
        res.send({message : "Songs Retrieved Successfully", data : allSongs});
    })
    .catch((error) => {
        console.error("Error Retrieving Songs : ", error);
        res.status(500).send({message: "Error Retrieving Songs", error});
    });
};

exports.show = (req, res) => {
    Song.findById(req.params.id)
    .then((song) => {
        console.log("Song Retrieved Successfully : ", song);
        res.send({message : "Song Retrieved Successfully", data : song});
    })
    .catch((error) => {
        console.error("Error Retrieving Song : ", error);
        res.status(500).send({message: "Error Retrieving Song", error});
    });
};

exports.store = (req, res) => {
    const newSong = new Song({
        title : req.body.title,
        artist : req.body.artist,
        category : req.body.category,
        album : req.body.album,
        url : req.body.url,
        photo : req.body.photo,
        year : req.body.year,
    });
    newSong
    .save()
    .then(() => {
        console.log("New Song Added Successfully");
        res.send({message : "New Song Added Successfully", data : newSong});
    })
    .catch((error) => {
        console.error("Error Adding New Song : ", error);
        res.status(500).send({message: "Error Adding New Song", error});
    });
};

exports.update = (req, res) => {
    Song.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedSong) => {
        console.log("Song Updated Successfully : ", updatedSong);
        res.send({message : "Song Updated Successfully", data : updatedSong});
    })
    .catch((error) => {
        console.error("Error Updating Song : ", error);
        res.status(500).send({message: "Error Updating Song", error});
    });
};

exports.destroy = (req, res) => {
    Song.findByIdAndDelete(req.params.id)
    .then(() => {
        console.log("Song Deleted Successfully");
        res.send({message : "Song Deleted successfully"});
    })
    .catch((error) => {
        console.error("Error Deleting Song : ", error);
        res.status(500).send({message: "Error Deleting Song", error});
    });
};