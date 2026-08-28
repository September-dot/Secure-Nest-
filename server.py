#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

if __name__ == '__main__':
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"🚀 SecureNest Prototype Server running at http://localhost:{PORT}")
            httpd.serve_forever()
    except OSError as e:
        # If port 8080 is in use, fallback to 8085
        PORT = 8085
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"🚀 SecureNest Prototype Server running at http://localhost:{PORT}")
            httpd.serve_forever()
