import { config } from "config/Constants";
import { Request, Response } from "express";
import shortid from "shortid";

export class URLController {
    /**
     * shorten
     * req: Request, res: Respons : Promise<void>
     **/
    public async shorten(req: Request, res: Response): Promise<void> {
        const {origiURL} = req.body
        const hash = shortid.generate()
        const shortUrl = `${config.API_URL}/${hash}`

        res.json({
            origiURL,
            hash,
            shortUrl
        })
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params
        const url = {
            origiURL: 'http://vejartes.com.br'
        }

        res.redirect(url.origiURL)
    }
}