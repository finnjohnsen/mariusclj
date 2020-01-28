(defproject mariusclj "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.597"]
                 [reagent "0.9.1"]
                 ]
  :plugins [[lein-figwheel "0.5.19"]]
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"] ;; Add "resources/public/cljs"
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main mariusclj.main
                                   ;; add the following
                                   :asset-path "cljs/out"
                                   :output-to  "resources/public/cljs/main.js"
                                   :output-dir "resources/public/cljs/out"}
                        }]
              }
  :figwheel {
             :css-dirs ["resources/public/css"] ;; <-- Add "resources/public/"
             }
  )