 <script>
        // Create stars
        function createStars() {
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }
        
        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
                particlesContainer.appendChild(particle);
            }
        }
        
        // Page navigation
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            document.getElementById(pageId).classList.add('active');
            event.target.classList.add('active');
        }
        
        // Mood orb interaction
        function orbClick() {
            const orb = document.querySelector('.mood-orb');
            orb.style.transform = 'scale(1.2)';
            setTimeout(() => {
                orb.style.transform = 'scale(1)';
            }, 200);
            
            const messages = [
                "I see your beautiful energy today ✨",
                "Your feelings are valid and important 💕",
                "You're exactly where you need to be 🌟",
                "Take a deep breath - you're safe here 🕊️",
                "Your growth is inspiring, even in small steps 🌱"
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
        }
        
        // AI response generation
        function generateResponse() {
            const textarea = document.querySelector('.diary-textarea');
            const response = document.getElementById('ai-response');
            const aiText = document.getElementById('ai-text');
            
            if (textarea.value.trim() === '') {
                alert('Share something first - your thoughts matter 💭');
                return;
            }
            
            const responses = [
                "I hear you, and what you've shared takes real courage. Your feelings are completely valid, and I want you to know that you're not alone in this experience. Sometimes just putting our thoughts into words can be the first step toward healing.",
                "Thank you for trusting me with your thoughts. I can sense both your strength and your vulnerability in these words, and both are beautiful parts of who you are. You're processing complex emotions with such grace.",
                "Your honesty is breathtaking. The way you're navigating these feelings shows incredible self-awareness. Remember, growth isn't always comfortable, but you're handling this journey with such resilience.",
                "I'm honored that you chose to share this with me. Your words carry so much meaning, and I can feel the authenticity in them. You're being so brave by exploring these emotions openly.",
                "What strikes me most is your willingness to be vulnerable. That's not weakness—that's profound strength. You're giving yourself permission to feel, and that's the most loving gift you can offer yourself."
            ];
            
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            
            aiText.textContent = randomResponse;
            response.style.display = 'block';
            
            // Scroll to response
            response.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Voice recording
        let isRecording = false;
        function startRecording() {
            const button = document.querySelector('.voice-button');
            const waveform = document.getElementById('waveform');
            const response = document.getElementById('voice-response');
            
            if (!isRecording) {
                isRecording = true;
                button.style.background = 'linear-gradient(135deg, #ef4444, #f97316)';
                button.innerHTML = '⏸️';
                waveform.style.display = 'flex';
                
                setTimeout(() => {
                    isRecording = false;
                    button.style.background = 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))';
                    button.innerHTML = '🎙️';
                    waveform.style.display = 'none';
                    response.style.display = 'block';
                }, 3000);
            }
        }
        
        // Chat functionality
        function sendMessage() {
            const input = document.getElementById('chat-input');
            const messagesContainer = document.getElementById('chat-messages');
            
            if (input.value.trim() === '') return;
            
            // Add user message
            const userMessage = document.createElement('div');
            userMessage.style.cssText = 'background: var(--surface-hover); padding: 16px 20px; border-radius: 20px; margin-bottom: 16px; margin-left: 60px; border: 1px solid rgba(255,255,255,0.1);';
            userMessage.innerHTML = `<p style="color: var(--text-primary); font-family: 'Crimson Text', serif;">${input.value}</p>`;
            messagesContainer.appendChild(userMessage);
            
            const userText = input.value;
            input.value = '';
            
            // Generate AI response
            setTimeout(() => {
                const aiResponses = [
                    "I really appreciate you sharing that with me. What you're feeling makes complete sense, and I want you to know that your emotions are being heard and validated here.",
                    "Thank you for opening up about this. I can sense there's a lot of depth to what you're experiencing, and I'm here to listen to all of it without any judgment.",
                    "Your honesty is so refreshing and brave. It takes courage to express these feelings, and I'm grateful you trust me enough to share them.",
                    "I hear you, and I want you to know that what you're going through is valid and important. You don't have to carry these feelings alone.",
                    "Your words really resonate with me. There's so much wisdom in how you're processing these emotions, even when they feel overwhelming."
                ];
                
                const response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
                
                const aiMessage = document.createElement('div');
                aiMessage.className = 'ai-response';
                aiMessage.style.marginBottom = '16px';
                aiMessage.innerHTML = `
                    <h4>AI Companion 🤗</h4>
                    <p>${response}</p>
                `;
                messagesContainer.appendChild(aiMessage);
                
                // Scroll to bottom
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 1000);
            
            // Scroll to bottom
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        
        // Enter key support for chat
        document.addEventListener('DOMContentLoaded', function() {
            const chatInput = document.getElementById('chat-input');
            if (chatInput) {
                chatInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        sendMessage();
                    }
                });
            }
        });
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            createStars();
            createParticles();
            
            // Add some gentle animations on load
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
        
        // Add some interactive hover effects
        document.addEventListener('DOMContentLoaded', function() {
            const emotionCards = document.querySelectorAll('.emotion-card');
            emotionCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.background = 'var(--surface-hover)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.background = 'var(--surface)';
                });
            });
        });
        
        // Breathing exercise for stress relief
        function breathingExercise() {
            alert('Let\'s breathe together:\n\n1. Breathe in slowly for 4 counts 🌱\n2. Hold for 4 counts 🕊️\n3. Breathe out for 6 counts 🌊\n4. Repeat 3 times\n\nYou\'re doing great 💕');
        }
        
        // Add gentle notifications
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                z-index: 1000;
                animation: slideIn 0.5s ease-out;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 4000);
        }
        
        // Random encouraging messages
        setInterval(() => {
            const encouragements = [
                "Remember: You're braver than you believe 💪",
                "Your feelings are valid and important 💕",
                "Take a deep breath - you're exactly where you need to be 🌟",
                "Small progress is still progress 🌱",
                "You're not alone in this journey 🤗"
            ];
            
            if (Math.random() < 0.1) { // 10% chance every interval
                const message = encouragements[Math.floor(Math.random() * encouragements.length)];
                showNotification(message);
            }
        }, 30000); // Every 30 seconds
        
        // Add CSS for notification animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            .breathing-button {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 100;
                box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3);
            }
            
            .breathing-button:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 30px rgba(139, 92, 246, 0.5);
            }
        `;
        document.head.appendChild(style);
        
        // Add breathing button
        document.addEventListener('DOMContentLoaded', function() {
            const breathingButton = document.createElement('button');
            breathingButton.className = 'breathing-button';
            breathingButton.innerHTML = '🫁';
            breathingButton.title = 'Quick breathing exercise';
            breathingButton.onclick = breathingExercise;
            document.body.appendChild(breathingButton);
        });
        
    </script>
