// export.createPages = async funnction({action , graphql}){
//     const {data} = await graphql`
//         query{
//              allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//                 edges {
//                     node {
//                         frontmatter {
//                         slug
//                         }
//                         id
//                     }
//                 }
//             }
//         }
//    `

// //    create paginated pages for posts

//     const postPerPage = 3

//     const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

//     Array.from({ length:numPages }).forEach((_,i) => {
//         action.createPages({
//             path: i == 0 ? `/` : `/${ i + 1}`,
//             component: require.resolve("./src/templates/allPost.js"),
//             context:{
//                 limit:postPerPage,
//                 skip:i * postPerPage,
//                 numPages,
//                 currentPage:i + 1,
//             }
//         })
//     })

//     // crete Single blog posts

//     data.allMdx.edges.forEach(edges =>{
//         const slug = edges.node.frontmatter.slug
//         const id = edges.node.id
//         action.createPages({
//             path:slug,
//             component:require.resolve(`.src/templates/singlePost.js`),
//             context:{id},
//         })
//     })
// }