export const fetcher = async (...args) => {
  try {
    const response = await fetch(...args)

    const data = await response.json()

    if (response.ok) {
      return data
    }

    console.log('something went wrong')
  } catch (e) {
    console.log('fetch failed')

    throw e
  }
}
