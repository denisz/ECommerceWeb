package main

import (
  "log"
  "net/http"
)

func main() {
  fs := http.FileServer(http.Dir("build"))
  http.Handle("/", fs)

  log.Println("Listening 0.0.0.0:80")
  http.ListenAndServe(":80", nil)
}
