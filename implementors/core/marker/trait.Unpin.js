(function() {var implementors = {};
implementors["pcs"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"pcs/enum.PCSErrors.html\" title=\"enum pcs::PCSErrors\">PCSErrors</a>","synthetic":true,"types":["pcs::errors::PCSErrors"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"pcs/struct.UniversalParams.html\" title=\"struct pcs::UniversalParams\">UniversalParams</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as PairingEngine&gt;::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as PairingEngine&gt;::G2Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["pcs::param::UniversalParams"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"pcs/struct.ProverParam.html\" title=\"struct pcs::ProverParam\">ProverParam</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as PairingEngine&gt;::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as PairingEngine&gt;::G2Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["pcs::param::ProverParam"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"pcs/struct.VerifierParam.html\" title=\"struct pcs::VerifierParam\">VerifierParam</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as PairingEngine&gt;::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as PairingEngine&gt;::G2Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["pcs::param::VerifierParam"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"pcs/struct.KZGMultilinearPC.html\" title=\"struct pcs::KZGMultilinearPC\">KZGMultilinearPC</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["pcs::KZGMultilinearPC"]}];
implementors["poly_iop"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"poly_iop/enum.PolyIOPErrors.html\" title=\"enum poly_iop::PolyIOPErrors\">PolyIOPErrors</a>","synthetic":true,"types":["poly_iop::errors::PolyIOPErrors"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"poly_iop/struct.VirtualPolynomial.html\" title=\"struct poly_iop::VirtualPolynomial\">VirtualPolynomial</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["poly_iop::virtual_poly::VirtualPolynomial"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"poly_iop/struct.PolyIOP.html\" title=\"struct poly_iop::PolyIOP\">PolyIOP</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["poly_iop::PolyIOP"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()