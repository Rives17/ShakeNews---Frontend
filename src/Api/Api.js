import useAwesomeFetch from '../Fetch/useAwesomeFetch'
import useFetch from '../Fetch/useFetch'
import useFetchDelete from '../Fetch/useFetchDelete'
import useFetchPut from '../Fetch/useFetchPut'

export const useNews = () => useFetch('http://localhost:5555/listNews')
export const useNewsId = (id) => useFetch('http://localhost:5555/listNewsId/' + id)
export const useNewPost = () => useAwesomeFetch('http://localhost:5555/createNews')
export const useUserProfile = (id) => useFetch('http://localhost:5555/api/listUsersId/' + id)
export const useNewsUser = (id) => useFetch('http://localhost:5555/listNewsUser/' + id)
export const useEditUser = (id)  => useFetchPut('http://localhost:5555/api/editUsers/' + id)
export const useDeleteNews = (id) => useFetchDelete('http://localhost:5555/deleteNews/' + id)
export const useEditNews = (id) => useFetchPut('http://localhost:5555/editNews/' + id)
export const useFilterNews = (categoria) => useFetch('http://localhost:5555/listNews/' + categoria)
export const useCreateComment = (id) => useAwesomeFetch('http://localhost:5555/createComentario/' + id)
export const useListComments = (id) => useFetch('http://localhost:5555/listComentarios/' + id)
export const usePublicUser = (nickname) => useFetch('http://localhost:5555/api/listUsersNickname/' + nickname)
export const useDeleteComment = (id) => useFetchDelete('http://localhost:5555/deleteComentario/' + id)
