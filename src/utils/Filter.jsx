
export function distinct() {
  const seen = { }
  return value => {
    if (seen[value]) {
      return false
    }
    else {
      seen[value] = true
      return true
    }
  }
}

export function distinctKey(key) {
  const seen = { }
  return obj => {
    const value = obj[key]
    if (seen[value]) {
      return false
    }
    else {
      seen[value] = true
      return true
    }
  }
}