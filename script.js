import initWasmModule from './wasm_module.js';

document.getElementById('runButton').addEventListener('click', () => {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  const limit = 10000000;

  // JavaScript Task
  const jsStart = performance.now();
  let jsCount = 0;

  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }

  function byJS () {
    setTimeout(() => {
      for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
          jsCount++;
        }
      }

      const jsEnd = performance.now();
      const jsTime = jsEnd - jsStart;
      resultsDiv.innerHTML 
      += `<p>by JS: ${jsTime.toFixed(2)} ms, Primes Found: ${jsCount}</p>`;
    }, 0)
  }
  function byWASM (Module) {
    const wasmStart = performance.now();
    const wasmCount = Module._count_primes(limit);
    const wasmEnd = performance.now();
    const wasmTime = wasmEnd - wasmStart;
    resultsDiv.innerHTML 
    += `<p>by WASM: ${wasmTime.toFixed(2)} ms, Primes Found: ${wasmCount}</p>`;
  }

  initWasmModule().then(Module => {
    byJS();
    byWASM(Module);
  });
});
