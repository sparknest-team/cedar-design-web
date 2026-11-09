# Handle scientific notation in decimal floor

Both shared floor implementations parse existing decimal exponents and truncate digits without overflowing a scaled intermediate. Preserve numeric floor and signed-zero/nonfinite value behavior, clamp integer precision to the existing [-292,292] range, and default fractional/nonfinite precision to zero. CountTo diagnoses unsupported precision and documents number formatting. No fixed-string or new rounding API.
