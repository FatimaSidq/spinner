let sleep = 100;
for (const frame of ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]) {
  setTimeout(() => {
    process.stdout.write(`\r${frame}  `);
  }, sleep);
  sleep += 200
}