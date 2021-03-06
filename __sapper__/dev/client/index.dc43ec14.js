import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, g as globals, t as text, c as claim_text, a as insert_dev, n as noop, b as detach_dev } from './client.b5a307d3.js';

/* src/routes/index.svelte generated by Svelte v3.35.0 */

const { console: console_1 } = globals;

function create_fragment(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*message*/ ctx[0]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*message*/ ctx[0]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	let message = "";

	onMount(async () => {
		const response = await fetch("http://localhost:8000/api/user", {
			headers: { "Content-Type": "application/json" },
			credentials: "include"
		});

		const content = await response.json();
		console.log(content);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ onMount, message });

	$$self.$inject_state = $$props => {
		if ("message" in $$props) $$invalidate(0, message = $$props.message);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [message];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGM0M2VjMTQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtvbk1vdW50fSBmcm9tICdzdmVsdGUnO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSAnJ1xuXG4gICAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcicsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coY29udGVudCk7XG4gICAgfSk7XG48L3NjcmlwdD5cblxue21lc3NhZ2V9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7d0JBaUJDLEdBQU87OztxQ0FBUCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FkQSxPQUFPLEdBQUcsRUFBRTs7Q0FFaEIsT0FBTztRQUNHLFFBQVEsU0FBUyxLQUFLLENBQUMsZ0NBQWdDO0dBQ3pELE9BQU8sSUFBRyxjQUFjLEVBQUUsa0JBQWtCO0dBQzVDLFdBQVcsRUFBRSxTQUFTOzs7UUFHcEIsT0FBTyxTQUFTLFFBQVEsQ0FBQyxJQUFJO0VBRW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
