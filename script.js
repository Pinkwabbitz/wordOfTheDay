// JavaScript Document   
    document.getElementById('get-word-btn').addEventListener('click', generateWord);

    let displayedWords = []; // Array to track displayed words

    function generateWord() {
        const words = [
            
				{ word: 'Ephemeral', ipa: 'e·phem·er·al', definition: 'lasting for a very short time.', sentence: 'The beauty of the sunset was ephemeral, fading within minutes.' },
				{ word: 'Serendipity', ipa: 'se·ren·dip·i·ty', definition: 'the occurrence and development of events by chance in a happy or beneficial way.', sentence: 'It was serendipity that led them to find the lost treasure.' },
				{ word: 'Petrichor', ipa: 'pe·tri·chor', definition: 'a pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.', sentence: 'The petrichor after the rain was refreshing.' },
				{ word: 'Halcyon', ipa: 'hal·cy·on', definition: 'denoting a period of time in the past that was idyllically happy and peaceful.', sentence: 'She often reminisced about the halcyon days of her childhood.' },
				{ word: 'Limerence', ipa: 'lim·er·ence', definition: 'the state of being infatuated with another person.', sentence: 'He was caught in a state of limerence, thinking of her constantly.' },
				{ word: 'Solipsism', ipa: 'sol·ip·sism', definition: 'the view or theory that the self is all that can be known to exist.', sentence: 'His solipsism made it difficult for him to relate to others.' },
				{ word: 'Sonder', ipa: 'son·der', definition: 'the realization that each passerby has a life as vivid and complex as your own.', sentence: 'The sonder hit him as he sat in the busy café, watching people go about their lives.' },
				{ word: 'Vellichor', ipa: 'vel·li·chor', definition: 'the strange wistfulness of used bookstores.', sentence: 'She felt vellichor every time she stepped into the old bookshop.' },
				{ word: 'Clinomania', ipa: 'cli·no·ma·ni·a', definition: 'an excessive desire to stay in bed.', sentence: 'His clinomania made it hard for him to start the day early.' },
				{ word: 'Nepenthe', ipa: 'ne·pen·the', definition: 'a drug described in Homer\'s Odyssey as banishing grief or trouble from a person\'s mind.', sentence: 'She sought nepenthe in the form of travel to distant lands.' },
				{ word: 'Eunoia', ipa: 'eu·noi·a', definition: 'beautiful thinking; a well mind.', sentence: 'Her eunoia was reflected in her kind actions towards others.' },
				{ word: 'Pluviophile', ipa: 'plu·vi·o·phile', definition: 'a lover of rain; someone who finds joy and peace of mind during rainy days.', sentence: 'As a true pluviophile, he loved walking in the rain without an umbrella.' },
				{ word: 'Mellifluous', ipa: 'mel·lif·lu·ous', definition: 'a sound that is sweet and smooth, pleasing to hear.', sentence: 'Her mellifluous voice was the highlight of the evening.' },
				{ word: 'Effervescent', ipa: 'ef·fer·ves·cent', definition: 'vivacious and enthusiastic.', sentence: 'Her effervescent personality lit up every room she entered.' },
				{ word: 'Susurrus', ipa: 'su·sur·rus', definition: 'whispering, murmuring, or rustling.', sentence: 'The susurrus of the leaves in the breeze was calming.' },
				{ word: 'Ebullient', ipa: 'e·bul·lient', definition: 'cheerful and full of energy.', sentence: 'Her ebullient spirit was contagious and lifted everyone\'s mood.' },
				{ word: 'Peregrinate', ipa: 'pe·re·gri·nate', definition: 'to travel or wander around from place to place.', sentence: 'They decided to peregrinate through Europe for the summer.' },
				{ word: 'Resplendent', ipa: 're·splen·dent', definition: 'attractive and impressive through being richly colorful or sumptuous.', sentence: 'The garden was resplendent with blooming flowers of every color.' },
				{ word: 'Aureate', ipa: 'au·re·ate', definition: 'denoting, or characterized by a gilded or golden color or quality.', sentence: 'The aureate glow of the evening sun brought warmth to the cold landscape.' },
				{ word: 'Luminous', ipa: 'lu·mi·nous', definition: 'full of or shedding light; bright or shining, especially in the dark.', sentence: 'The stars were luminous in the clear night sky.' },
				{ word: 'Serenade', ipa: 'ser·e·nade', definition: 'a musical performance given to honor or express love for someone.', sentence: 'He sang a serenade under her window on their anniversary.' },
				{ word: 'Incandescent', ipa: 'in·can·des·cent', definition: 'emitting light as a result of being heated; passionate or brilliant.', sentence: 'The incandescent lightbulb filled the room with a warm glow.' },
				{ word: 'Sonorous', ipa: 'so·no·rous', definition: 'an imposingly deep and full sound.', sentence: 'The sonorous voice of the speaker commanded attention.' },
				{ word: 'Celestial', ipa: 'ce·les·tial', definition: 'positioned in or relating to the sky, or outer space as observed in astronomy.', sentence: 'The celestial beauty of the night sky was awe-inspiring.' },
				{ word: 'Aplomb', ipa: 'a·plomb', definition: 'self-confidence or assurance, especially when in a demanding situation.', sentence: 'She handled the challenging project with great aplomb.' },
				{ word: 'Zephyr', ipa: 'ze·phyr', definition: 'a gentle, mild breeze.', sentence: 'The zephyr brought relief from the heat.' },
				{ word: 'Quixotic', ipa: 'kwik·sot·ik', definition: 'extremely idealistic; unrealistic and impractical.', sentence: 'His quixotic quest for the perfect utopia kept him busy for years.' },
				{ word: 'Epiphany', ipa: 'e·pif·a·ny', definition: 'a moment of sudden revelation or insight.', sentence: 'She had an epiphany while walking in the park, realizing her true calling.' },
				{ word: 'Laconic', ipa: 'luh·kon·ik', definition: 'using very few words.', sentence: 'His laconic response was a simple nod.' },
				{ word: 'Ineffable', ipa: 'in·ef·fa·ble', definition: 'too great or extreme to be expressed or described in words.', sentence: 'The ineffable beauty of the sunset left them speechless.' },
				{ word: 'Ethereal', ipa: 'i·thee·ree·uhl', definition: 'extremely delicate and light in a way that seems too perfect for this world.', sentence: 'The dancer moved with an ethereal grace that mesmerized everyone.' },
				{ word: 'Labyrinthine', ipa: 'lab·uh·rin·thine', definition: 'complicated; highly convoluted.', sentence: 'The labyrinthine corridors of the old castle were easy to get lost in.' },
				{ word: 'Sublime', ipa: 'suh·blime', definition: 'of such excellence, grandeur, or beauty as to inspire great admiration or awe.', sentence: 'The sublime landscape stretched as far as the eye could see.' },
				{ word: 'Ebullition', ipa: 'eb·yuh·lish·uhn', definition: 'a sudden outburst of emotion or violence.', sentence: 'The ebullition of joy was evident when they announced the winner.' },
				{ word: 'Rhapsody', ipa: 'rap·so·dee', definition: 'an effusively enthusiastic or ecstatic expression of feeling.', sentence: 'He spoke in a rhapsody about his travels to distant lands.' },
				{ word: 'Iridescent', ipa: 'i·ri·des·uhnt', definition: 'showing luminous colors that seem to change when seen from different angles.', sentence: 'The iridescent wings of the butterfly shimmered in the sunlight.' },
				{ word: 'Aegis', ipa: 'ee·jis', definition: 'the protection, backing, or support of a particular person or organization.', sentence: 'Under the aegis of the university, she pursued her groundbreaking research.' },
				{
				word: "Aplomb",
				ipa: "/əˈplɒm/",
				definition: "Self-confidence or assurance, especially when in a demanding situation.",
				sentence: "She handled the challenging project with great aplomb."
			  },
			  {
				word: "Byzantine",
				ipa: "/ˈbɪz.ən.tiːn/",
				definition: "Complex or intricate, often in a way that is difficult to understand.",
				sentence: "The byzantine bureaucracy made it nearly impossible to get anything done."
			  },
			  {
				word: "Cacophony",
				ipa: "/kæˈkɑː.fə.ni/",
				definition: "A harsh, discordant mixture of sounds.",
				sentence: "The cacophony of car horns and sirens filled the city streets."
			  },
			  {
				word: "Dappled",
				ipa: "/ˈdæp.əld/",
				definition: "Marked with spots or patches of color.",
				sentence: "The dappled sunlight through the trees created a mesmerizing pattern on the ground."
			  },
			  {
				word: "Ephemeral",
				ipa: "/ɪˈfɛm.ər.əl/",
				definition: "Lasting for a very short time.",
				sentence: "The beauty of the sunset was ephemeral, fading within minutes."
			  },
			  {
				word: "Furtive",
				ipa: "/ˈfɜːr.tɪv/",
				definition: "Secretive or sneaky, often because of guilt or fear of getting caught.",
				sentence: "He cast a furtive glance over his shoulder to make sure no one was following him."
			  },
			  {
				word: "Gossamer",
				ipa: "/ˈɡɒs.ə.mər/",
				definition: "Something extremely light, thin, and delicate.",
				sentence: "The gossamer fabric of her dress flowed gracefully as she danced."
			  },
			  {
				word: "Hapless",
				ipa: "/ˈhæp.ləs/",
				definition: "Unfortunate or unlucky.",
				sentence: "The hapless traveler found himself stranded in the middle of nowhere."
			  },
			  {
				word: "Ineffable",
				ipa: "/ɪˈnɛf.ə.bəl/",
				definition: "Too great or extreme to be expressed or described in words.",
				sentence: "The ineffable beauty of the sunset left them speechless."
			  },
			  {
				word: "Juxtapose",
				ipa: "/ˌdʒʌk.stəˈpəʊz/",
				definition: "To place different things side by side for contrast.",
				sentence: "The artist juxtaposed vibrant colors with muted tones to create a striking effect."
			  },
			  {
				word: "Kaleidoscope",
				ipa: "/kəˈlaɪ.dəˌskoʊp/",
				definition: "A constantly changing pattern of colors and shapes.",
				sentence: "The kaleidoscope of autumn leaves was a feast for the eyes."
			  },
			  {
				word: "Labyrinthine",
				ipa: "/ˌlæbəˈrɪnˌθin/",
				definition: "Complicated; highly convoluted.",
				sentence: "The labyrinthine corridors of the old castle were easy to get lost in."
			  },
			  {
				word: "Mellifluous",
				ipa: "/mɛˈlɪf.lu.əs/",
				definition: "A sound that is sweet and smooth, pleasing to hear.",
				sentence: "Her mellifluous voice was the highlight of the evening."
			  },
			  {
				word: "Nefarious",
				ipa: "/nəˈfeə.ri.əs/",
				definition: "Wicked or criminal.",
				sentence: "The villain's nefarious plot was finally uncovered by the detectives."
			  },
			  {
				word: "Obfuscate",
				ipa: "/ˈɒb.fə.skeɪt/",
				definition: "To deliberately make something unclear or difficult to understand.",
				sentence: "The lawyer's convoluted language only served to obfuscate the issue further."
			  },
			  {
				word: "Pernicious",
				ipa: "/pəˈnɪʃ.əs/",
				definition: "Having a harmful effect, especially in a gradual or subtle way.",
				sentence: "The pernicious influence of the toxic work environment was evident in the employees' morale."
			  },
			  {
				word: "Quintessential",
				ipa: "/ˌkwɪn.tɪˈsɛn.ʃəl/",
				definition: "Representing the most perfect or typical example of something.",
				sentence: "Her performance was the quintessential example of excellence in the field."
			  },
			  {
				word: "Resplendent",
				ipa: "/rɪˈsplɛn.dənt/",
				definition: "Attractive and impressive through being richly colorful or sumptuous.",
				sentence: "The garden was resplendent with blooming flowers of every color."
			  },
			  {
				word: "Sanguine",
				ipa: "/ˈsæŋ.ɡwɪn/",
				definition: "Optimistic or positive, especially in a difficult situation.",
				sentence: "Despite the challenges, she remained sanguine about the project's success."
			  },
			  {
				word: "Tenuous",
				ipa: "/ˈten.ju.əs/",
				definition: "Very weak or insubstantial; flimsy.",
				sentence: "The connection between the two theories was tenuous at best."
			  },
			  {
				word: "Ubiquitous",
				ipa: "/juːˈbɪk.wɪ.təs/",
				definition: "Present, appearing, or found everywhere.",
				sentence: "Smartphones have become ubiquitous in modern society."
			  },
			  {
				word: "Vicarious",
				ipa: "/vɪˈkɛə.ri.əs/",
				definition: "Experienced in the imagination through the feelings or actions of another person.",
				sentence: "She felt a vicarious thrill watching her favorite athlete compete."
			  },
			  {
				word: "Wistful",
				ipa: "/ˈwɪst.fəl/",
				definition: "Longing or yearning, often with a touch of sadness.",
				sentence: "He looked out the window with a wistful expression, remembering his childhood."
			  },
			  {
				word: "Xenophile",
				ipa: "/ˈzɛn.ə.faɪl/",
				definition: "A person who is attracted to or interested in foreign cultures or people.",
				sentence: "Her status as a xenophile was evident in her extensive collection of international art."
			  },
			  {
				word: "Yen",
				ipa: "/jɛn/",
				definition: "A strong desire or craving.",
				sentence: "He had a yen for adventure that took him to many exotic places."
			  },
			  {
				word: "Zephyr",
				ipa: "/ˈzɛfər/",
				definition: "A gentle, mild breeze.",
				sentence: "The zephyr brought relief from the heat."
			  },
			  {
				word: "Aesthetic",
				ipa: "/iːsˈθɛtɪk/",
				definition: "Concerned with beauty or the appreciation of beauty.",
				sentence: "The minimalist design of the room was highly aesthetic and calming."
			  },
			  {
				word: "Benevolent",
				ipa: "/bəˈnɛv.ə.lənt/",
				definition: "Showing kindness and goodwill.",
				sentence: "The benevolent donor funded scholarships for underprivileged students."
			  },
			  {
				word: "Cryptic",
				ipa: "/ˈkrɪp.tɪk/",
				definition: "Having a meaning that is mysterious or obscure.",
				sentence: "The cryptic message left everyone puzzled about its true meaning."
			  },
			  {
				word: "Dichotomy",
				ipa: "/daɪˈkɒt.ə.mi/",
				definition: "A division or contrast between two things that are represented as being entirely different.",
				sentence: "The dichotomy between urban and rural life is often stark and striking."
			  },
			  {
				word: "Ebullient",
				ipa: "/ɪˈbʌl.jənt/",
				definition: "Cheerful and full of energy.",
				sentence: "Her ebullient spirit was contagious and lifted everyone’s mood."
			  },
			  {
				word: "Frivolous",
				ipa: "/ˈfrɪv.ə.ləs/",
				definition: "Not having any serious purpose or value; carefree and not serious.",
				sentence: "The frivolous spending on luxury items was a cause for concern."
			  },
			  {
				word: "Gratuitous",
				ipa: "/ɡrəˈtʃuː.ɪ.təs/",
				definition: "Given or done free of charge; lacking good reason or justification.",
				sentence: "The film's gratuitous violence overshadowed its otherwise compelling storyline."
			  },
			  {
				word: "Histrionic",
				ipa: "/ˌhɪs.triˈɒn.ɪk/",
				definition: "Overly theatrical or melodramatic in character or style.",
				sentence: "Her histrionic reactions to minor setbacks were often the source of amusement."
			  },
			  {
				word: "Irascible",
				ipa: "/ɪˈræs.ɪ.bəl/",
				definition: "Easily provoked to anger; irritable.",
				sentence: "His irascible nature made him difficult to work with."
			  },
			  {
				word: "Juxtaposition",
				ipa: "/ˌdʒʌk.stə.pəˈzɪʃ.ən/",
				definition: "The fact of two things being seen or placed close together with contrasting effect.",
				sentence: "The juxtaposition of the old and new buildings created a unique cityscape."
			  },
			  {
				word: "Kinetic",
				ipa: "/kɪˈnɛt.ɪk/",
				definition: "Relating to or resulting from motion.",
				sentence: "The kinetic energy of the moving pendulum was evident in its swinging motion."
			  },
			  {
				word: "Luminous",
				ipa: "/ˈluː.mɪ.nəs/",
				definition: "Full of or shedding light; bright or shining.",
				sentence: "The luminous glow of the moon lit up the night sky."
			  },
			  {
				word: "Meticulous",
				ipa: "/məˈtɪk.jʊ.ləs/",
				definition: "Showing great attention to detail; very careful and precise.",
				sentence: "Her meticulous work on the project was evident in every detail."
			  },
			  {
				word: "Nonchalant",
				ipa: "/ˌnɒn.ʃəˈlɒnt/",
				definition: "Feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm.",
				sentence: "He gave a nonchalant shrug when asked about the missed deadline."
			  }

        ];

        // Check if the word limit has been reached
        if (displayedWords.length >= 10) {
            alert("Try using your words today in a sentence and come back tomorrow for more!");
            return;
        }

        // Generate a random word
        const randomIndex = Math.floor(Math.random() * words.length);
        const word = words[randomIndex];

        // Display the word
        const wordContainer = document.getElementById('word-container');
        wordContainer.style.display = 'block';
        wordContainer.innerHTML = `
            <h2>${word.word}</h2><img src="speaker.png" class="speaker-icon" onclick="speakWord('${word.word}')" alt="Pronounce">
            <p><em>(${word.ipa})</em></p>
            <p>${word.definition}</p>
            <p><strong>Example:</strong> ${word.sentence}</p>
        `;

        // Add the word to the displayedWords array
        displayedWords.push(word.word);

        // Save the displayed words to local storage for persistence
        localStorage.setItem('displayedWords', JSON.stringify(displayedWords));
    }

    // Function to speak the word
    function speakWord(word) {
        const speech = new SpeechSynthesisUtterance(word);
        speechSynthesis.speak(speech);
    }

    function resetWordsIfNewDay() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentDate = now.toISOString().slice(0, 10); // YYYY-MM-DD

        // Get stored reset date and words
        const storedDate = localStorage.getItem('resetDate');
        const savedWords = JSON.parse(localStorage.getItem('displayedWords')) || [];

        // If the date has changed or it's past 6 AM EST, reset the words
        if (storedDate !== currentDate || currentHour >= 6) {
            displayedWords = [];
            localStorage.setItem('displayedWords', JSON.stringify(displayedWords));
            localStorage.setItem('resetDate', currentDate);
        } else {
            displayedWords = savedWords;
        }
    }

    // Load displayed words from local storage and check if reset is needed
    window.onload = function() {
        resetWordsIfNewDay();
    };

    // Quote rotation logic
    const quotes = [
        // Your quotes array
    ];

    function displayRandomQuote() {
        const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
        const quoteContainer = document.getElementById('quote-container');
        quoteContainer.innerText = quotes[randomQuoteIndex];
    }

    // Initial quote display
    displayRandomQuote();

    // Opacity transition for the quote container
    const quoteContainer = document.getElementById('quote-container');
    let opacityState = 1;
    let transitionDuration = 1000; // 1 second for transition

    function changeQuote() {
        // Start fading out the quote
        quoteContainer.style.transition = `opacity ${transitionDuration / 1000}s ease`;
        quoteContainer.style.opacity = 0;

        // After fading out (1 second), change the quote and fade it in
        setTimeout(() => {
            displayRandomQuote();
            quoteContainer.style.opacity = 1;
        }, transitionDuration);
    }

    // Run the changeQuote function every 10 seconds
    setInterval(changeQuote, 10000); // Changes every 10 seconds