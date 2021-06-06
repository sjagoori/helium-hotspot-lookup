import { useEffect, useState } from "react";
import styles from './BookmarkButton.module.css'

export default function BookmarkButton(props) {
  const [disabled, setDisabled] = useState(false);

  function handleBookmark(e) {
    e.preventDefault();

    let newData = {
      label: e.target[0].value ? e.target[0].value : props.data.name,
      data: props.data,
    }

    // gets value from localStorage or initialize if undefined
    let oldData = localStorage.getItem("bookmarks") ? JSON.parse(localStorage.getItem("bookmarks")) : []

    // adds to localStorage if it doesn't already exists
    if (!Object.values(oldData).find(key => key.label == newData.label)) {
      oldData.push(newData)
      localStorage.setItem('bookmarks', JSON.stringify(oldData))
      setDisabled(true)
    }
  }

  function handleDelete(e) {
    e.preventDefault();

    let oldData = JSON.parse(localStorage.getItem("bookmarks"))
    let newData = Object.values(oldData).filter(key => key.label != props.data.name)

    localStorage.setItem('bookmarks', JSON.stringify(newData))
    setDisabled(false)
  }

  useEffect(() => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
    if (bookmarks != null && Object.values(bookmarks).find(key => key.label == props.data.name)) {
      setDisabled(true)
    }
  })

  return (
    <form onSubmit={disabled ? handleDelete : handleBookmark}>
      <button className={`${styles.button} ${disabled ? styles.delete : styles.bookmark}`} type="submit">{disabled ? "Delete" : "Bookmark"}</button>
    </form>
  )
}