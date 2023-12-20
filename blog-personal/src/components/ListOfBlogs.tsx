import { type ListOfBlogs } from '../Types/types.d'
import Blog from './Blogs'

interface Props {
  blogs: ListOfBlogs
}

function ListBlogs({ blogs }: Props) {
  return (
        <div>

            {blogs.map(ele => (
              <Blog key={ele.id} blog={ele} />
              ))}
        
        </div>
  )
}

export default ListBlogs
