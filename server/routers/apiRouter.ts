import { Router, Request, Response } from 'express';
import { body, param } from 'express-validator';
import { handleInputErrors } from '../modules/handleInputErrors';
import { createArtist, deleteArtist, getArtists, getOneArtist, updateArtistName } from '../controllers/artist';
import { createAlbum, deleteAlbum, getAlbums, getOneAlbum, updateAlbumName } from '../controllers/album';

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
apiRouter.get('/song');
apiRouter.get('/song/:id', (req: Request, res: Response) => {});
apiRouter.put('/song/:id', (req: Request, res: Response) => {});
apiRouter.post('/song', (req: Request, res: Response) => {});
apiRouter.delete('/song/:id', (req: Request, res: Response) => {});

// Note
apiRouter.get('/note', (req: Request, res: Response) => {});
apiRouter.get('/note/:id', (req: Request, res: Response) => {});
apiRouter.put('/note/:id', (req: Request, res: Response) => {});
apiRouter.post('/note', (req: Request, res: Response) => {});
apiRouter.delete('/note/:id', (req: Request, res: Response) => {});

export default apiRouter;
