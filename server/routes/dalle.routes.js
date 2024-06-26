import * as dotenv from 'dotenv'
import{Configuration,OpenAIApi} from 'openai'
dotenv.config()
const router=express.Router()
router.router('/',(req,res)=>{
    res.status(200).json({message:'hi'})
})
export default router;