import { spawnSync } from 'node:child_process';
const node = process.execPath;
const run = (script, args = []) => {
  const result = spawnSync(node, [script, ...args], { stdio: 'inherit', shell: false });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
};
run('node_modules/typescript/bin/tsc', ['-b']);
run('node_modules/vite/bin/vite.js', ['build']);
