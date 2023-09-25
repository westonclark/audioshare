import { Router, Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import { body, param } from 'express-validator';
import { handleInputErrors } from '../modules/handleInputErrors';
import { createArtist, deleteArtist, getArtists, getOneArtist, updateArtistName } from '../controllers/artist';
import { createAlbum, deleteAlbum, getAlbums, getOneAlbum, updateAlbumName } from '../controllers/album';
import { createSong, deleteSong, getOneSong, getSongs, updateSongName, updateSongUrl } from '../controllers/song';
import { createNote, deleteNote, getNotes, getOneNote, updateNoteChecked } from '../controllers/note';
import { generateUrl } from '../modules/generatePresignedUrl';

const apiRouter = Router();

// Artist
apiRouter.get('/artist', getArtists);
apiRouter.get('/artist/:id', param('id').exists().isString(), handleInputErrors, getOneArtist);
apiRouter.post('/artist', body('name').exists().isString(), handleInputErrors, createArtist);
apiRouter.put('/artist/:id', body('name').exists().isString(), param('id').exists().isString(), handleInputErrors, updateArtistName);
apiRouter.delete('/artist/:id', param('id').exists().isString(), deleteArtist);

// Album
apiRouter.get('/album', body('artistId').exists().isString(), handleInputErrors, getAlbums);
apiRouter.get('/album/:id', param('id').exists().isString(), handleInputErrors, getOneAlbum);
apiRouter.post('/album', body('name').exists().isString(), body('artistId').exists().isString(), handleInputErrors, createAlbum);
apiRouter.put('/album/:id', param('id').exists().isString(), body('name').exists().isString(), handleInputErrors, updateAlbumName);
apiRouter.delete('/album/:id', param('id').exists().isString(), handleInputErrors, deleteAlbum);

// Song
apiRouter.get('/song', body('albumId').exists().isString(), handleInputErrors, getSongs);
apiRouter.get('/song/:id', param('id').exists().isString(), handleInputErrors, getOneSong);
apiRouter.post('/song', body('name').exists().isString(), body('albumId').exists().isString(), handleInputErrors, createSong, generateUrl, updateSongUrl);
apiRouter.put('/song/:id', body('name').exists().isString(), param('id').exists().isString(), handleInputErrors, updateSongName);
apiRouter.delete('/song/:id', param('id').exists().isString(), handleInputErrors, deleteSong);

// Note
apiRouter.get('/note', body('songId').exists().isString(), handleInputErrors, getNotes);
apiRouter.get('/note/:id', param('id').exists().isString(), handleInputErrors, getOneNote);
apiRouter.post('/note', body('value').exists().isString(), body('songId').exists().isString(), handleInputErrors, createNote);
apiRouter.put('/note/:id', param('id').exists().isString(), body('checked').exists().isBoolean(), handleInputErrors, updateNoteChecked);
apiRouter.delete('/note/:id', param('id').exists().isString(), handleInputErrors, deleteNote);

// Error Handler
apiRouter.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.json({ message: 'oops something went wrong' });
});

export default apiRouter;
