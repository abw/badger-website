mkdir -p dist/styles && \
sass \
    --load-path=node_modules \
    styles/build/badger-website.scss > \
    dist/styles/badger-website.css && \
sass \
    --load-path=node_modules \
    --style compressed \
    styles/build/badger-website.scss > \
    dist/styles/badger-website.min.css
