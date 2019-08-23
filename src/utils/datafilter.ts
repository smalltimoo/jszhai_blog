/**
 * @description 按Tag查询文章
 * @param {String} tag
 */
export const getAllPostsByTag = (allPosts, tag) => {
  let tagResult = allPosts.filter(item => {
    return item.tags.indexOf(`${tag}`) >= 0
  })
  return tagResult
}
/**
 * @description 按categorie查询文章
 * @param {String} categorie
 */
export const getAllPostsByCategories = (allPosts, categorie) => {
  let categoriesResult = allPosts.filter(item => {
    return item.categories === categorie
  })
  return categoriesResult
}

/**
 * @description 返回所有的Tag
 */
export const getAllTags = allPosts => {
  let tags = []
  for (let post of allPosts) {
    if (post.tags.length === 0) {
      tags.push('No-Tag-Posts')
    } else {
      tags.push(...post.tags)
    }
  }
  // set转变成array 去除重复
  tags = Array.from(new Set([...tags]))
  return tags
}
/**
 * @description 返回所有的Categories
 */
export const getAllCategories = allPosts => {
  let categories = []
  for (let post of allPosts) {
    if (post.categories) {
      categories.push(post.categories)
    } else {
      categories.push('Others')
    }
  }
  categories = Array.from(new Set([...categories]))
  return categories
}

/**
 * @description 数组分割
 * @param {object} array 待分割数组
 * @param {number} size 分割后的子数组长度
 */
export const sliceArray = (array, size = 7) => {
  let result = []
  for (let x = 0; x < Math.ceil(array.length / size); x++) {
    let start = x * size
    let end = start + size
    result.push(array.slice(start, end))
  }
  return result
}
