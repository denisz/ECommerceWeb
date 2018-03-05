package main

import (
	"log"
	"net/http"
	"time"
	"flag"
	"fmt"
)

func main() {
	p := flag.Int("p", 80, "Port")
	flag.Parse()

	r := http.NewServeMux()
	r.Handle("/", http.FileServer(http.Dir("build")))
	r.Handle("*", http.FileServer(http.Dir("build/index.html")))
	s := &http.Server{
		Addr:           fmt.Sprintf(":%d", *p),
		Handler:        r,
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}
	log.Printf("Listening 0.0.0.0:%d \n", *p)
	log.Fatal(s.ListenAndServe())
}

